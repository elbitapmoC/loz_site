"use client";

import React from "react";
import { SacredResourcesHub } from "../components/home/SacredResourcesHub";
import { PageHeader } from "../components/layout/PageHeader";
import { Layout } from "../components/layout/Layout";

export default function ResourcesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-8 py-16">
          <PageHeader
            title="Sacred Resources"
            subtitle="Download comprehensive guides, calendars, and resources to deepen your spiritual journey"
          />
        </div>
        <SacredResourcesHub />
      </div>
    </Layout>
  );
}