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
      console.error('Newsletter subscription error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => (
    <div className="flex flex-col justify-center h-full gap-6 p-2">
      <div className="space-y-2 text-left">
        <h3 className="text-2xl font-medium tracking-tight text-foreground font-serif">{title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative flex items-center">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="h-12 pl-4 text-base transition-all bg-background/50 border-border/40 focus:border-primary/50 rounded-xl pr-28"
            disabled={isLoading}
            required
          />
          <Button
            type="submit"
            size="sm"
            disabled={isLoading || !email.trim()}
            className="absolute right-1.5 h-9 px-4 rounded-lg font-medium transition-all hover:scale-[1.02]"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin" />
            ) : isSubscribed ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <div className="flex items-center gap-2">
                <span>Join</span>
                <Send className="w-3 h-3" />
              </div>
            )}
          </Button>
        </div>
      </form>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
        <CheckCircle className="w-3 h-3" />
        <span>Secure. No spam, ever.</span>
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
