import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import database error interceptor to prevent PGRST205 errors
import "./utils/databaseErrorInterceptor";

// Layout and Core Components
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { ComingSoonPage } from "./components/layout/ComingSoonPage";
import { NotFoundPage } from "./components/layout/NotFoundPage";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";

// Providers and UI
import { FontProvider } from "./components/providers/FontProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ClerkProvider } from "@clerk/clerk-react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useAuth as useClerkAuth } from "@clerk/clerk-react";
import { Toaster } from "./components/ui/sonner";

// Helper to lazily load named exports
const lazyImport = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ [key: string]: T }>,
  name: string
) =>
  lazy(() =>
    factory().then((module) => ({ default: module[name as keyof typeof module] }))
  );

// Main Pages
const HomePage = lazyImport(() => import("./components/home/HomePage"), "HomePage");
const CalendarPage = lazyImport(() => import("./components/calendar/CalendarPage"), "CalendarPage");
const EventsPage = lazyImport(() => import("./components/events/EventsPage"), "EventsPage");
const AboutPage = lazyImport(() => import("./components/about/AboutPage"), "AboutPage");
const MinistriesPage = lazyImport(() => import("./components/ministries/MinistriesPage"), "MinistriesPage");
const ContactPage = lazyImport(() => import("./components/contact/ContactPage"), "ContactPage");
const ResourcesPage = lazyImport(() => import("./components/resources/ResourcesPage"), "ResourcesPage");
const DonatePage = lazyImport(() => import("./components/donate/DonatePage"), "DonatePage");
const DonateSuccessPage = lazyImport(() => import("./components/donate/DonateSuccessPage"), "DonateSuccessPage");

// Learn Section Pages
const TwelveTribesPage = lazyImport(() => import("./components/learn/TwelveTribesPage"), "TwelveTribesPage");
const ShabbatPage = lazyImport(() => import("./components/learn/ShabbatPage"), "ShabbatPage");
const BiblicalHolyDaysPage = lazyImport(() => import("./components/learn/BiblicalHolyDaysPage"), "BiblicalHolyDaysPage");
const PaganHolidaysPage = lazyImport(() => import("./components/learn/PaganHolidaysPage"), "PaganHolidaysPage");

// Individual Tribe Pages
const ReubenPage = lazyImport(() => import("./components/learn/ReubenPage"), "ReubenPage");
const SimeonPageTemplate = lazyImport(() => import("./components/learn/SimeonPageTemplate"), "SimeonPageTemplate");
const LeviPageTemplate = lazyImport(() => import("./components/learn/LeviPageTemplate"), "LeviPageTemplate");
const JudahPageTemplate = lazyImport(() => import("./components/learn/JudahPageTemplate"), "JudahPageTemplate");
const DanPageTemplate = lazyImport(() => import("./components/learn/DanPageTemplate"), "DanPageTemplate");
const NaphtaliPageTemplate = lazyImport(() => import("./components/learn/NaphtaliPageTemplate"), "NaphtaliPageTemplate");
const GadPageTemplate = lazyImport(() => import("./components/learn/GadPageTemplate"), "GadPageTemplate");
const AsherPageTemplate = lazyImport(() => import("./components/learn/AsherPageTemplate"), "AsherPageTemplate");
const IssacharPageTemplate = lazyImport(() => import("./components/learn/IssacharPageTemplate"), "IssacharPageTemplate");
const ZebulunPageTemplate = lazyImport(() => import("./components/learn/ZebulunPageTemplate"), "ZebulunPageTemplate");
const EphraimPageTemplate = lazyImport(() => import("./components/learn/EphraimPageTemplate"), "EphraimPageTemplate");
const BenjaminPageTemplate = lazyImport(() => import("./components/learn/BenjaminPageTemplate"), "BenjaminPageTemplate");

// Admin and Legal Pages
const ContactAdmin = lazyImport(() => import("./components/contact/ContactAdmin"), "ContactAdmin");
const NewsletterAdmin = lazyImport(() => import("./components/newsletter/NewsletterAdmin"), "NewsletterAdmin");
const PrivacyPolicy = lazyImport(() => import("./components/legal/PrivacyPolicy"), "PrivacyPolicy");

// Auth Pages
const SignInPage = lazyImport(() => import("./components/auth/SignInPage"), "SignInPage");
const SignUpPage = lazyImport(() => import("./components/auth/SignUpPage"), "SignUpPage");

const LocationsPage = lazyImport(() => import("./components/layout/LocationsPage"), "LocationsPage");


// Main App Routes Component
const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate/success" element={<DonateSuccessPage />} />

          {/* Auth Routes */}
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />

          

          {/* About Section */}
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/about/beliefs"
            element={<ComingSoonPage title="Our Beliefs" />}
          />
          <Route
            path="/about/history"
            element={<ComingSoonPage title="Our History" />}
          />
          <Route
            path="/about/leaders"
            element={<ComingSoonPage title="Our Leaders" />}
          />

          {/* Learn Section */}
          <Route
            path="/learn"
            element={<ComingSoonPage title="Learn the Truth" />}
          />
          <Route
            path="/learn/12-tribes"
            element={<TwelveTribesPage />}
          />
          <Route
            path="/learn/shabbat"
            element={<ShabbatPage />}
          />

          {/* Individual Tribe Pages */}
          <Route path="/learn/reuben" element={<ReubenPage />} />
          <Route
            path="/learn/simeon"
            element={<SimeonPageTemplate />}
          />
          <Route
            path="/learn/levi"
            element={<LeviPageTemplate />}
          />
          <Route
            path="/learn/judah"
            element={<JudahPageTemplate />}
          />
          <Route
            path="/learn/dan"
            element={<DanPageTemplate />}
          />
          <Route
            path="/learn/naphtali"
            element={<NaphtaliPageTemplate />}
          />
          <Route
            path="/learn/gad"
            element={<GadPageTemplate />}
          />
          <Route
            path="/learn/asher"
            element={<AsherPageTemplate />}
          />
          <Route
            path="/learn/issachar"
            element={<IssacharPageTemplate />}
          />
          <Route
            path="/learn/zebulun"
            element={<ZebulunPageTemplate />}
          />
          <Route
            path="/learn/ephraim"
            element={<EphraimPageTemplate />}
          />
          <Route
            path="/learn/benjamin"
            element={<BenjaminPageTemplate />}
          />

          {/* Additional Learn Topics */}
          <Route
            path="/learn/israelites-today"
            element={
              <ComingSoonPage title="Who Are The Israelites Today?" />
            }
          />
          <Route
            path="/learn/holy-days"
            element={<BiblicalHolyDaysPage />}
          />
          <Route
            path="/learn/biblical-calendar"
            element={
              <ComingSoonPage title="Understanding the Biblical Calendar" />
            }
          />
          <Route
            path="/learn/holy-day-observance"
            element={
              <ComingSoonPage title="Holy Day Observance Guide" />
            }
          />
          <Route
            path="/learn/new-moon"
            element={
              <ComingSoonPage title="New Moon Celebrations" />
            }
          />
          <Route
            path="/learn/annual-festivals"
            element={<ComingSoonPage title="Annual Festivals" />}
          />
          <Route
            path="/learn/fasting"
            element={
              <ComingSoonPage title="Fasting in Scripture" />
            }
          />
          <Route
            path="/learn/pagan-holidays"
            element={<PaganHolidaysPage />}
          />

          {/* Ministries Section */}
          <Route
            path="/ministries"
            element={<MinistriesPage />}
          />
          <Route
            path="/ministries/prison"
            element={<ComingSoonPage title="Prison Ministry" />}
          />
          <Route
            path="/ministries/food-pantry"
            element={<ComingSoonPage title="Food Pantry" />}
          />
          <Route
            path="/ministries/community"
            element={
              <ComingSoonPage title="Community Outreach" />
            }
          />

          {/* Other Main Sections */}
          <Route
            path="/locations"
            element={<LocationsPage />}
          />
          
          <Route
            path="/welcome-booklet"
            element={<ComingSoonPage title="Welcome Booklet" />}
          />
          <Route
            path="/camp-flyers"
            element={<ComingSoonPage title="Camp Flyers" />}
          />

          {/* Resources */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route
            path="/resources/prayer-guide"
            element={
              <ComingSoonPage title="Prayer Guide for Holy Days" />
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/newsletter"
            element={<NewsletterAdmin />}
          />
          <Route
            path="/admin/contact"
            element={<ContactAdmin />}
          />

          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<PrivacyPolicy />} />

          {/* 404 page for undefined routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
    </ErrorBoundary>
  );
};

// Main App Component
export default function App() {
  const convexUrl = (import.meta as any).env?.VITE_CONVEX_URL as string | undefined;
  const clerkPublishableKey = (import.meta as any).env?.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;
  const resolvedConvexUrl = typeof convexUrl === "string" && /^https?:\/\//.test(convexUrl) ? convexUrl : "https://example.com";
  const convexClient = new ConvexReactClient(resolvedConvexUrl);
  return (
    <ThemeProvider defaultTheme="light">
      <FontProvider>
        <ClerkProvider publishableKey={clerkPublishableKey!}>
          <ConvexProvider client={convexClient} useAuth={useClerkAuth}>
            <BrowserRouter>
              <ScrollToTop />
              <Toaster />
              <AppRoutes />
            </BrowserRouter>
          </ConvexProvider>
        </ClerkProvider>
      </FontProvider>
    </ThemeProvider>
  );
}
