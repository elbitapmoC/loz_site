"use client";

import React from "react";
import { PageHeader } from "../components/layout/PageHeader";

export default function CampFlyersPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-8 py-16">
        <PageHeader
          title="Camp Flyers"
          subtitle="This page is currently under construction. Please check back soon!"
        />
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            We're working on bringing you information about our spiritual retreats and camps. 
            In the meantime, feel free to explore our other resources.
          </p>
        </div>
      </div>
    </div>
  );
}