"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  ArrowRight,
  Clock,
  Moon,
  Star,
  Info,
  BookOpen,
  Heart,
  Download,
  Filter,
  List,
  Grid,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  CalendarDashboard,
  eventTypeColors,
} from "./CalendarDashboard";
import { EventsList } from "./EventsList";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { VisualHierarchyText } from "../layout/VisualHierarchyText";
import { ScriptureQuote } from "../layout/ScriptureQuote";
import { motion } from "framer-motion";
import { useCalendarData } from "../../hooks/useCalendarData";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState<"dashboard" | "list" | "grid">("dashboard");
  
  const {
    allEvents,
    isLoading,
    error,
  } = useCalendarData();

  // Generate calendar grid
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="flex flex-col">
      {/* Hero Section - Consistent with site pattern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Sacred biblical calendar with ancient scrolls"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content - Using standard container pattern */}
        <div className="relative z-10 container max-w-4xl py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <VisualHierarchyText
                primary="The Appointed Times"
                secondary="of the Most High"
                secondaryFont="cormorant"
                secondaryWeight="semibold"
                size="large"
              />
            </div>

            

            <ScriptureQuote
              quote="These are the feasts of the LORD, even holy convocations, which ye shall proclaim in their seasons."
              reference="Leviticus 23:4"
              variant="overlay"
              size="md"
              className="mb-12"
            />
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </section>      

      {/* Calendar Content */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <CalendarDashboard />
        </div>
      </section>
    </div>
  );
}