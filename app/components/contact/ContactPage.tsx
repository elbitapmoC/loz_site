"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, Heart } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  howHeard: string;
  country: string;
  areaOfInterest: string;
  inquiry: string;
  acceptPrivacy: boolean;
  receiveUpdates: boolean;
}

const initialFormData: ContactFormData = {
  email: '',
  firstName: '',
  lastName: '',
  howHeard: '',
  country: '',
  areaOfInterest: '',
  inquiry: '',
  acceptPrivacy: false,
  receiveUpdates: false,
};

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Other'
];

const areasOfInterest = [
  'Learning about Biblical Truth',
  'Joining our Congregation',
  'Biblical Calendar & Holy Days',
  'Prison Ministry',
  'Food Pantry Volunteer',
  'Community Outreach',
  'Educational Programs',
  'Youth Ministry',
  'Music Ministry',
  'General Inquiry'
];

const howHeardOptions = [
  'Search Engine',
  'Social Media',
  'Friend or Family',
  'Community Event',
  'Other Church',
  'Website',
  'Flyer or Advertisement',
  'Other'
];

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.inquiry.trim()) newErrors.inquiry = 'Please share your inquiry with us';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d3a9068f/contact/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: '',
            message: formData.inquiry,
            requestType: formData.areaOfInterest || 'general',
            metadata: {
              howHeard: formData.howHeard,
              country: formData.country,
              receiveUpdates: formData.receiveUpdates
            }
          })
        }
      );

      const data = await response.json();
      
      if (data.success) {
        toast.success('Thank you for reaching out!', {
          description: 'We\'ve received your message and will get back to you within 24 hours.'
        });
        
        // Reset form
        setFormData(initialFormData);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly via phone or email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@theeloz.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(951) 447-6305</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Locations</p>
                    <p className="text-sm text-muted-foreground">
                      We have multiple locations.<br />
                      <a href="/locations" className="text-primary hover:underline">
                        View all locations →
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Service Times</p>
                    <p className="text-sm text-muted-foreground">
                      Saturdays 12-4PM.<br />
                      <span className="italic">Check our calendar for upcoming events</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Only email, first name, and your inquiry are required. All other fields are optional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-destructive' : ''}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* First and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={errors.firstName ? 'border-destructive' : ''}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div className="space-y-2">
                    <Label htmlFor="howHeard">How did you hear about us?</Label>
                    <Select 
                      value={formData.howHeard} 
                      onValueChange={(value) => handleInputChange('howHeard', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select how you heard about us" />
                      </SelectTrigger>
                      <SelectContent>
                        {howHeardOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Country and Area of Interest */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select 
                        value={formData.country} 
                        onValueChange={(value) => handleInputChange('country', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="areaOfInterest">Area of Interest</Label>
                      <Select 
                        value={formData.areaOfInterest} 
                        onValueChange={(value) => handleInputChange('areaOfInterest', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {areasOfInterest.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Inquiry Description */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Short description of your inquiry *</Label>
                    <Textarea
                      id="inquiry"
                      value={formData.inquiry}
                      onChange={(e) => handleInputChange('inquiry', e.target.value)}
                      className={errors.inquiry ? 'border-destructive' : ''}
                      placeholder="Please share your questions, prayer requests, or how we can help you..."
                      rows={4}
                    />
                    {errors.inquiry && (
                      <p className="text-sm text-destructive">{errors.inquiry}</p>
                    )}
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.acceptPrivacy}
                        onCheckedChange={(checked) => handleInputChange('acceptPrivacy', checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="privacy"
                          className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I have read and accept the{' '}
                          <a href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Subscription */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="updates"
                      checked={formData.receiveUpdates}
                      onCheckedChange={(checked) => handleInputChange('receiveUpdates', checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="updates"
                        className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Yes please, I'd like to receive updates about upcoming events, teachings, and ministry activities.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit
                      </>
                    )}
                  </Button>

                  {/* reCAPTCHA Notice */}
                  <p className="text-xs text-muted-foreground">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" className="text-primary hover:underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}