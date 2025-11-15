// Newsletter Database Utility
// Currently uses localStorage but can be easily adapted for Supabase, Firebase, etc.

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
  isActive: boolean;
  source?: string; // Track where they subscribed from
}

class NewsletterDatabase {
  private readonly storageKey = 'tloz_newsletter_subscriptions';

  // Get all subscriptions (admin function)
  getAllSubscriptions(): NewsletterSubscription[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading newsletter subscriptions:', error);
      return [];
    }
  }

  // Check if email already exists
  emailExists(email: string): boolean {
    const subscriptions = this.getAllSubscriptions();
    return subscriptions.some(sub => 
      sub.email.toLowerCase() === email.toLowerCase() && sub.isActive
    );
  }

  // Add new subscription
  async addSubscription(email: string, source?: string): Promise<{ success: boolean; message: string }> {
    try {
      // Validate email format
      if (!this.isValidEmail(email)) {
        return { success: false, message: 'Please enter a valid email address.' };
      }

      // Check if already subscribed
      if (this.emailExists(email)) {
        return { success: false, message: 'This email is already subscribed to our newsletter.' };
      }

      const subscriptions = this.getAllSubscriptions();
      const newSubscription: NewsletterSubscription = {
        id: this.generateId(),
        email: email.toLowerCase().trim(),
        subscribedAt: new Date().toISOString(),
        isActive: true,
        source: source || 'website'
      };

      subscriptions.push(newSubscription);
      localStorage.setItem(this.storageKey, JSON.stringify(subscriptions));

      return { success: true, message: 'Successfully subscribed to our newsletter!' };
    } catch (error) {
      console.error('Error adding newsletter subscription:', error);
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  }

  // Unsubscribe (mark as inactive)
  async unsubscribe(email: string): Promise<{ success: boolean; message: string }> {
    try {
      const subscriptions = this.getAllSubscriptions();
      const index = subscriptions.findIndex(sub => 
        sub.email.toLowerCase() === email.toLowerCase()
      );

      if (index === -1) {
        return { success: false, message: 'Email not found in our system.' };
      }

      subscriptions[index].isActive = false;
      localStorage.setItem(this.storageKey, JSON.stringify(subscriptions));

      return { success: true, message: 'Successfully unsubscribed from our newsletter.' };
    } catch (error) {
      console.error('Error unsubscribing:', error);
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  }

  // Get active subscriptions count
  getActiveSubscriptionsCount(): number {
    return this.getAllSubscriptions().filter(sub => sub.isActive).length;
  }

  // Get subscriptions by date range
  getSubscriptionsByDateRange(startDate: string, endDate: string): NewsletterSubscription[] {
    const subscriptions = this.getAllSubscriptions();
    return subscriptions.filter(sub => {
      const subDate = sub.subscribedAt;
      return subDate >= startDate && subDate <= endDate;
    });
  }

  // Export subscriptions (for admin use)
  exportSubscriptions(): string {
    const activeSubscriptions = this.getAllSubscriptions()
      .filter(sub => sub.isActive)
      .map(sub => ({
        email: sub.email,
        subscribedAt: sub.subscribedAt,
        source: sub.source
      }));

    return JSON.stringify(activeSubscriptions, null, 2);
  }

  // Validate email format
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Generate unique ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Method to migrate to external database (placeholder)
  async migrateToExternalDb(): Promise<void> {
    // This method can be implemented when moving to Supabase, Firebase, etc.
    // const subscriptions = this.getAllSubscriptions();
    // await externalDb.insertMany(subscriptions);
    console.log('Migration to external database not implemented yet');
  }
}

// Export singleton instance
export const newsletterDb = new NewsletterDatabase();

// For future migration to Supabase/Firebase, you would replace the above with:
/*
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
)

export const newsletterDb = {
  async addSubscription(email: string, source?: string) {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email: email.toLowerCase().trim(), source }])
    
    if (error) {
      return { success: false, message: error.message }
    }
    
    return { success: true, message: 'Successfully subscribed!' }
  },
  
  async emailExists(email: string) {
    const { data } = await supabase
      .from('newsletter_subscriptions')
      .select('email')
      .eq('email', email.toLowerCase().trim())
      .eq('is_active', true)
      .single()
    
    return !!data
  }
}
*/