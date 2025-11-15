"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../auth/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Heart, CreditCard, Calendar, AlertCircle, CheckCircle, DollarSign } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

// Initialize Stripe - loads from Supabase environment variable
let stripePromise: Promise<any> | null = null;

const getStripePromise = async () => {
  if (!stripePromise) {
    // Fetch the publishable key from the environment
    // Note: In production, you'll set this via environment variables
    const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 
      'pk_test_51QRmAIRsqGBiMzl2pDpzmEKb9dWiD59vRDSP6JuXbZE7vDx1zyqv0r9YiKQf1rvdC7YGTgHGPDdYTkO2m6xYFYPp00Hde9g2PD';
    
    if (!STRIPE_PUBLISHABLE_KEY) {
      throw new Error('Stripe publishable key not configured');
    }
    
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

function DonationForm() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();
  const { user, getToken } = useAuth();
  const router = useRouter();

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!user) {
      router.push('/signin');
      return;
    }

    if (!stripe || !elements) {
      setError('Payment system not loaded. Please refresh the page.');
      return;
    }

    const donationAmount = parseFloat(customAmount || amount);

    if (!donationAmount || donationAmount < 1) {
      setError('Please enter a valid donation amount');
      return;
    }

    setProcessing(true);

    try {
      // Create payment method
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (pmError) {
        throw new Error(pmError.message);
      }

      // Call backend to create donation
      const token = await getToken();
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d3a9068f/donations/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || publicAnonKey}`
          },
          body: JSON.stringify({
            amount: donationAmount,
            frequency,
            paymentMethodId: paymentMethod.id
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Donation failed');
      }

      // Handle 3D Secure if needed
      if (data.clientSecret) {
        const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret);
        if (confirmError) {
          throw new Error(confirmError.message);
        }
      }

      setSuccess(true);
      setAmount('');
      setCustomAmount('');
      
      // Clear card element
      cardElement.clear();

      // Redirect to donation history after 2 seconds
      setTimeout(() => {
        router.push('/donations/history');
      }, 2000);
    } catch (err: any) {
      console.error('Donation error:', err);
      setError(err.message || 'Donation failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please <a href="/signin" className="underline">sign in</a> to make a donation.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Thank you for your generous donation! Redirecting to donation history...
          </AlertDescription>
        </Alert>
      )}

      {/* Frequency Selection */}
      <div className="space-y-3">
        <Label>Donation Frequency</Label>
        <RadioGroup value={frequency} onValueChange={(v: string) => setFrequency(v as any)}>
          <div className="flex items-center space-x-2 p-4 border-2 border-amber-200 dark:border-gold-800 rounded-lg cursor-pointer hover:bg-amber-50 dark:hover:bg-navy-900">
            <RadioGroupItem value="one-time" id="one-time" />
            <Label htmlFor="one-time" className="cursor-pointer flex-1">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-600 dark:text-gold-500" />
                <div>
                  <p className="font-medium">One-Time Donation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Make a single donation</p>
                </div>
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 p-4 border-2 border-amber-200 dark:border-gold-800 rounded-lg cursor-pointer hover:bg-amber-50 dark:hover:bg-navy-900">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly" className="cursor-pointer flex-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600 dark:text-gold-500" />
                <div>
                  <p className="font-medium">Monthly Donation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recurring monthly support</p>
                </div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Amount Selection */}
      <div className="space-y-3">
        <Label>Donation Amount</Label>
        <div className="grid grid-cols-3 gap-3">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(preset);
                setCustomAmount('');
              }}
              className={`p-4 border-2 rounded-lg transition-all ${
                amount === preset && !customAmount
                  ? 'border-amber-600 dark:border-gold-600 bg-amber-50 dark:bg-navy-900'
                  : 'border-amber-200 dark:border-gold-800 hover:border-amber-400 dark:hover:border-gold-600'
              }`}
            >
              <DollarSign className="w-5 h-5 mx-auto mb-1 text-amber-600 dark:text-gold-500" />
              <p className="font-medium">${preset}</p>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="customAmount">Custom Amount</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="customAmount"
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount('');
              }}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="space-y-3">
        <Label>Payment Information</Label>
        <div className="p-4 border-2 border-amber-200 dark:border-gold-800 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 dark:from-gold-600 dark:to-gold-700 dark:hover:from-gold-700 dark:hover:to-gold-800"
        disabled={processing || !stripe}
      >
        {processing ? (
          'Processing...'
        ) : (
          <>
            <Heart className="w-5 h-5 mr-2" />
            Donate ${customAmount || amount || '0'}
            {frequency === 'monthly' && '/month'}
          </>
        )}
      </Button>
    </form>
  );
}

export function DonationPage() {
  const [stripeLoaded, setStripeLoaded] = useState(false);

  React.useEffect(() => {
    getStripePromise().then(() => setStripeLoaded(true));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-50 to-cream-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-4">Support Our Ministry</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your generous contributions help us continue our mission of bringing light and truth to our community.
            </p>
          </div>

          {/* Donation Form */}
          <Card className="border-2 border-amber-200 dark:border-gold-800 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 dark:from-gold-600 dark:to-gold-700 rounded-full">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl">Make a Donation</CardTitle>
              <CardDescription className="text-lg">
                Every contribution makes a difference
              </CardDescription>
            </CardHeader>

            <CardContent>
              {stripeLoaded ? (
                <Elements stripe={getStripePromise()}>
                  <DonationForm />
                </Elements>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">Loading payment system...</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-2 border-amber-200 dark:border-gold-800">
              <CardHeader>
                <Heart className="w-8 h-8 text-amber-600 dark:text-gold-500 mb-2" />
                <CardTitle>Tax Deductible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  All donations are tax-deductible. You'll receive a receipt via email.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 dark:border-gold-800">
              <CardHeader>
                <CreditCard className="w-8 h-8 text-amber-600 dark:text-gold-500 mb-2" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Your payment information is processed securely through Stripe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 dark:border-gold-800">
              <CardHeader>
                <Calendar className="w-8 h-8 text-amber-600 dark:text-gold-500 mb-2" />
                <CardTitle>Recurring Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Set up monthly donations and cancel anytime from your account.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
