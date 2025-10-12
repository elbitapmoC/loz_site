import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { newsletterDb } from '../../utils/newsletterDb';

interface NewsletterSubscriptionProps {
  variant?: 'card' | 'inline' | 'minimal';
  source?: string;
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export function NewsletterSubscription({
  variant = 'card',
  source = 'website',
  className = '',
  title = 'Stay Connected',
  description = 'Subscribe to receive updates about holy days, events, and spiritual teachings.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe'
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    try {
      const result = await newsletterDb.addSubscription(email, source);
      
      if (result.success) {
        toast.success(result.message, {
          description: 'You\'ll receive updates about our holy days and events.',
          icon: <CheckCircle className="h-4 w-4" />
        });
        setEmail('');
        setIsSubscribed(true);
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        toast.error(result.message, {
          icon: <AlertCircle className="h-4 w-4" />
        });
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => (
    <div className="space-y-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="pr-24"
            disabled={isLoading}
            required
          />
          <Button
            type="submit"
            size="sm"
            disabled={isLoading || !email.trim()}
            className="absolute right-1 top-1 h-8 px-3"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : isSubscribed ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="ml-1 hidden sm:inline">
              {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : buttonText}
            </span>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      {/* Subscription count for engagement */}
      <div className="text-center pt-2">
        <p className="text-xs text-muted-foreground">
          Join {newsletterDb.getActiveSubscriptionsCount()} others receiving our updates
        </p>
      </div>
    </div>
  );

  if (variant === 'minimal') {
    return (
      <div className={`max-w-md ${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1"
            disabled={isLoading}
            required
          />
          <Button
            type="submit"
            disabled={isLoading || !email.trim()}
            className="shrink-0"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`bg-muted/50 rounded-lg p-6 ${className}`}>
        {renderContent()}
      </div>
    );
  }

  // Default card variant
  return (
    <Card className={`p-6 ${className}`}>
      {renderContent()}
    </Card>
  );
}

// Newsletter stats component for admin/display purposes
export function NewsletterStats() {
  const totalSubscriptions = newsletterDb.getActiveSubscriptionsCount();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">{totalSubscriptions}</p>
            <p className="text-sm text-muted-foreground">Active Subscribers</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-green-500/10">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">
              {newsletterDb.getSubscriptionsByDateRange(
                new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                new Date().toISOString()
              ).length}
            </p>
            <p className="text-sm text-muted-foreground">This Week</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-blue-500/10">
            <Send className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">
              {newsletterDb.getSubscriptionsByDateRange(
                new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
                new Date().toISOString()
              ).length}
            </p>
            <p className="text-sm text-muted-foreground">This Month</p>
          </div>
        </div>
      </Card>
    </div>
  );
}