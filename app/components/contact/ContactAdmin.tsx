import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { toast } from "sonner";
import { 
  Mail, 
  User, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Trash2, 
  ExternalLink,
  Users,
  Clock,
  Heart
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

interface ContactSubmission {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  howHeard: string;
  country: string;
  areaOfInterest: string;
  inquiry: string;
  acceptPrivacy: boolean;
  receiveUpdates: boolean;
  submittedAt: string;
}

export function ContactAdmin() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    try {
      const stored = localStorage.getItem('contactSubmissions');
      const data = stored ? JSON.parse(stored) : [];
      // Sort by submission date (newest first)
      const sorted = data.sort((a: ContactSubmission, b: ContactSubmission) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );
      setSubmissions(sorted);
    } catch (error) {
      console.error('Error loading submissions:', error);
      toast.error('Failed to load contact submissions');
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = (id: string) => {
    try {
      const updated = submissions.filter(sub => sub.id !== id);
      setSubmissions(updated);
      localStorage.setItem('contactSubmissions', JSON.stringify(updated));
      toast.success('Contact submission deleted');
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete submission');
    }
  };

  const exportSubmissions = () => {
    try {
      const dataStr = JSON.stringify(submissions, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      toast.success('Contact submissions exported');
    } catch (error) {
      console.error('Error exporting submissions:', error);
      toast.error('Failed to export submissions');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getInterestBadgeVariant = (interest: string) => {
    const variants = {
      'Learning about Biblical Truth': 'default',
      'Joining our Congregation': 'secondary',
      'Biblical Calendar & Holy Days': 'outline',
      'Prison Ministry': 'destructive',
      'Food Pantry Volunteer': 'secondary',
      'Community Outreach': 'default',
      'Educational Programs': 'outline',
      'Youth Ministry': 'secondary',
      'Music Ministry': 'default',
      'General Inquiry': 'outline'
    };
    return variants[interest as keyof typeof variants] || 'default';
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container max-w-6xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading contact submissions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
              <p className="text-muted-foreground">
                Manage and review contact form submissions from website visitors
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportSubmissions} variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Export Data
              </Button>
              <Button onClick={loadSubmissions} variant="outline">
                Refresh
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{submissions.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {submissions.filter(sub => sub.receiveUpdates).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {submissions.filter(sub => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(sub.submittedAt) > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Submissions List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {submissions.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No contact submissions yet</h3>
                <p className="text-muted-foreground">
                  Contact form submissions will appear here once visitors start reaching out.
                </p>
              </CardContent>
            </Card>
          ) : (
            submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <CardTitle className="text-lg">
                            {submission.firstName} {submission.lastName}
                          </CardTitle>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            <a 
                              href={`mailto:${submission.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {submission.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {submission.country}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(submission.submittedAt)}
                          </div>
                        </div>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Submission</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this contact submission? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteSubmission(submission.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Tags/Badges */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={getInterestBadgeVariant(submission.areaOfInterest)}>
                        {submission.areaOfInterest}
                      </Badge>
                      <Badge variant="outline">
                        {submission.howHeard}
                      </Badge>
                      {submission.receiveUpdates && (
                        <Badge variant="secondary">
                          <Mail className="h-3 w-3 mr-1" />
                          Newsletter
                        </Badge>
                      )}
                    </div>
                    
                    <Separator />
                    
                    {/* Inquiry Message */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Inquiry:</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {submission.inquiry}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}