import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Download, 
  Mail, 
  Search, 
  Calendar, 
  Users, 
  Trash2,
  Eye,
  EyeOff 
} from 'lucide-react';
import { toast } from 'sonner';
import { newsletterDb, NewsletterSubscription } from '../../utils/newsletterDb';
import { NewsletterStats } from './NewsletterSubscription';

export function NewsletterAdmin() {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>(
    newsletterDb.getAllSubscriptions()
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [showInactive, setShowInactive] = useState(false);

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = showInactive ? true : sub.isActive;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    try {
      const exportData = newsletterDb.exportSubscriptions();
      const blob = new Blob([exportData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `newsletter-subscriptions-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('Newsletter subscriptions exported successfully');
    } catch (error) {
      toast.error('Failed to export subscriptions');
    }
  };

  const handleUnsubscribe = async (email: string) => {
    try {
      const result = await newsletterDb.unsubscribe(email);
      if (result.success) {
        setSubscriptions(newsletterDb.getAllSubscriptions());
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Failed to unsubscribe user');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Newsletter Admin</h1>
          <p className="text-muted-foreground">Manage newsletter subscriptions</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setShowInactive(!showInactive)}
            className="flex items-center gap-2"
          >
            {showInactive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showInactive ? 'Hide Inactive' : 'Show All'}
          </Button>
          
          <Button onClick={handleExport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <NewsletterStats />

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {filteredSubscriptions.length} results
            </Badge>
          </div>
        </div>
      </Card>

      {/* Subscriptions List */}
      <Card>
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Newsletter Subscriptions
          </h2>
        </div>
        
        <div className="divide-y">
          {filteredSubscriptions.length > 0 ? (
            filteredSubscriptions.map((subscription) => (
              <div key={subscription.id} className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{subscription.email}</p>
                    <Badge 
                      variant={subscription.isActive ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {subscription.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    {subscription.source && (
                      <Badge variant="outline" className="text-xs">
                        {subscription.source}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(subscription.subscribedAt)}
                    </span>
                  </div>
                </div>
                
                {subscription.isActive && (
                  <Button
                    aria-label="Unsubscribe"
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnsubscribe(subscription.email)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No subscriptions found</p>
              {searchTerm && (
                <p className="text-sm">Try adjusting your search terms</p>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Migration Note */}
      <Card className="p-4 bg-muted/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-blue-500/10">
            <Mail className="h-4 w-4 text-blue-500" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">Database Migration</h3>
            <p className="text-sm text-muted-foreground">
              Currently storing subscriptions in localStorage. When ready to scale, 
              the system can be easily migrated to Supabase, Firebase, or another database service.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => toast.info('Migration feature not implemented yet')}
              className="mt-2"
            >
              Migrate to External DB
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
