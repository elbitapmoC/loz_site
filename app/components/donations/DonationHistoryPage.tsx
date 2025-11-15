import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../auth/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { AlertCircle, Calendar, DollarSign, Download, Heart, TrendingUp, X } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface Donation {
  id: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  status: string;
  createdAt: string;
  stripeSubscriptionId?: string;
  canceledAt?: string;
}

interface DonationSummary {
  totalOneTime: number;
  monthlyTotal: number;
  activeSubscriptions: number;
}

export function DonationHistoryPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [summary, setSummary] = useState<DonationSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cancelingId, setCancelingId] = useState<string | null>(null);
  
  const { user, getToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/signin');
      return;
    }

    loadDonationHistory();
  }, [user]);

  const loadDonationHistory = async () => {
    try {
      setLoading(true);
      setError('');

      const token = await getToken();
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d3a9068f/donations/history`,
        {
          headers: {
            'Authorization': `Bearer ${token || publicAnonKey}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load donation history');
      }

      setDonations(data.donations || []);
      setSummary(data.summary || null);
    } catch (err: any) {
      console.error('Error loading donation history:', err);
      setError(err.message || 'Failed to load donation history');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelSubscription = async (subscriptionId: string) => {
    if (!confirm('Are you sure you want to cancel this monthly donation?')) {
      return;
    }

    try {
      setCancelingId(subscriptionId);

      const token = await getToken();
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d3a9068f/donations/cancel-subscription`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || publicAnonKey}`
          },
          body: JSON.stringify({ subscriptionId })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to cancel subscription');
      }

      // Reload donation history
      await loadDonationHistory();
    } catch (err: any) {
      console.error('Error canceling subscription:', err);
      alert(err.message || 'Failed to cancel subscription');
    } finally {
      setCancelingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-cream-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl mb-4">Donation History</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              View and manage your contributions
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Summary Cards */}
          {summary && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-amber-200 dark:border-gold-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Total One-Time</CardTitle>
                  <Heart className="h-5 w-5 text-amber-600 dark:text-gold-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl">{formatCurrency(summary.totalOneTime)}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    All-time one-time donations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 dark:border-gold-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Monthly Giving</CardTitle>
                  <Calendar className="h-5 w-5 text-amber-600 dark:text-gold-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl">{formatCurrency(summary.monthlyTotal)}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Active monthly contributions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 dark:border-gold-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Active Subscriptions</CardTitle>
                  <TrendingUp className="h-5 w-5 text-amber-600 dark:text-gold-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl">{summary.activeSubscriptions}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Recurring donations
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Donation List */}
          <Card className="border-2 border-amber-200 dark:border-gold-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Donations</CardTitle>
                  <CardDescription>Your complete donation history</CardDescription>
                </div>
                <Button
                  variant="outline"
                  className="border-amber-300 dark:border-gold-700"
                  onClick={() => router.push('/donations')}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Make a Donation
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">Loading donation history...</p>
                </div>
              ) : donations.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    You haven't made any donations yet
                  </p>
                  <Button onClick={() => router.push('/donations')}>
                    Make Your First Donation
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {donations.map((donation) => (
                        <TableRow key={donation.id}>
                          <TableCell>{formatDate(donation.createdAt)}</TableCell>
                          <TableCell className="font-medium">
                            {formatCurrency(donation.amount)}
                            {donation.frequency === 'monthly' && '/mo'}
                          </TableCell>
                          <TableCell>
                            <Badge variant={donation.frequency === 'monthly' ? 'default' : 'secondary'}>
                              {donation.frequency === 'monthly' ? 'Monthly' : 'One-Time'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={
                                donation.status === 'succeeded' || donation.status === 'active' 
                                  ? 'default' 
                                  : donation.status === 'canceled'
                                  ? 'destructive'
                                  : 'secondary'
                              }
                            >
                              {donation.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            {donation.frequency === 'monthly' && 
                             donation.status === 'active' && 
                             donation.stripeSubscriptionId && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleCancelSubscription(donation.stripeSubscriptionId!)}
                                disabled={cancelingId === donation.stripeSubscriptionId}
                                className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950"
                              >
                                {cancelingId === donation.stripeSubscriptionId ? (
                                  'Canceling...'
                                ) : (
                                  <>
                                    <X className="w-4 h-4 mr-1" />
                                    Cancel
                                  </>
                                )}
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
