"use client";

import React from "react";
import { PageHeader } from "../components/layout/PageHeader";
import { Layout } from "../components/layout/Layout";

export default function WelcomeBookletPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-8 py-16">
          <PageHeader
            title="Welcome Booklet"
            subtitle="This page is currently under construction. Please check back soon!"
          />
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              We're working on bringing you comprehensive welcome materials. 
              In the meantime, feel free to explore our other resources.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}