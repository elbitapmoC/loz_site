"use client";

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface NewsletterSubscriptionProps {
  variant?: 'card' | 'inline' | 'minimal';
  source?: string;
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  inputAriaLabel?: string;
  buttonAriaLabel?: string;
}

export function NewsletterSubscription({
  variant = 'card',
  source = 'website',
  className = '',
  title = 'Stay Connected',
  description = 'Subscribe to receive updates about holy days, events, and spiritual teachings.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  inputAriaLabel = 'Email address',
  buttonAriaLabel = 'Subscribe to newsletter'
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
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d3a9068f/newsletter/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email, source })
        }
      );

      const result = await response.json();
      
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
      console.error('Newsletter subscription error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg bg-secondary-foreground/5 p-3 md:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 justify-items-center sm:justify-items-start">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full sm:w-full max-w-md mx-auto sm:mx-0 text-foreground placeholder:text-foreground/60"
            disabled={isLoading}
            required
            aria-label={inputAriaLabel}
            aria-describedby="newsletter-helper"
          />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !email.trim()}
              className="shrink-0 w-full sm:w-auto h-10 max-w-md mx-auto sm:mx-0"
              aria-label={buttonAriaLabel}
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
        </div>

        <p id="newsletter-helper" className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      {/* Subscription count removed - requires auth to view */}
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
            className="flex-1 text-foreground placeholder:text-foreground/60"
            disabled={isLoading}
            required
            aria-label={inputAriaLabel}
          />
          <Button
            type="submit"
            disabled={isLoading || !email.trim()}
            className="shrink-0"
            aria-label={buttonAriaLabel}
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

// Newsletter stats component - moved to admin dashboard
export function NewsletterStats() {
  return (
    <div className="text-center p-4">
      <p className="text-sm text-muted-foreground">
        Statistics available in admin dashboard
      </p>
    </div>
  );
}
