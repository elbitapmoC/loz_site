import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import database error interceptor to prevent PGRST205 errors
import "./utils/databaseErrorInterceptor";

// Layout and Core Components
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { ComingSoonPage } from "./components/layout/ComingSoonPage";
import { NotFoundPage } from "./components/layout/NotFoundPage";

// Main Pages
import { HomePage } from "./components/home/HomePage";
import { CalendarPage } from "./components/calendar/CalendarPage";
import { EventsPage } from "./components/events/EventsPage";
import { AboutPage } from "./components/about/AboutPage";
import { MinistriesPage } from "./components/ministries/MinistriesPage";
import { ContactPage } from "./components/contact/ContactPage";

// Learn Section Pages
import { RepentancePage } from "./components/learn/RepentancePage";
import { TwelveTribesPage } from "./components/learn/TwelveTribesPage";
import { ShabbatPage } from "./components/learn/ShabbatPage";
import { BiblicalHolyDaysPage } from "./components/learn/BiblicalHolyDaysPage";
import { PaganHolidaysPage } from "./components/learn/PaganHolidaysPage";

// Individual Tribe Pages
import { ReubenPage } from "./components/learn/ReubenPage";
import { SimeonPageTemplate } from "./components/learn/SimeonPageTemplate";
import { LeviPageTemplate } from "./components/learn/LeviPageTemplate";
import { JudahPageTemplate } from "./components/learn/JudahPageTemplate";
import { DanPageTemplate } from "./components/learn/DanPageTemplate";
import { NaphtaliPageTemplate } from "./components/learn/NaphtaliPageTemplate";
import { GadPageTemplate } from "./components/learn/GadPageTemplate";
import { AsherPageTemplate } from "./components/learn/AsherPageTemplate";
import { IssacharPageTemplate } from "./components/learn/IssacharPageTemplate";
import { ZebulunPageTemplate } from "./components/learn/ZebulunPageTemplate";
import { JosephPageTemplate } from "./components/learn/JosephPageTemplate";
import { BenjaminPageTemplate } from "./components/learn/BenjaminPageTemplate";

// Admin and Legal Pages
import { ContactAdmin } from "./components/contact/ContactAdmin";
import { NewsletterAdmin } from "./components/newsletter/NewsletterAdmin";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";

// Providers and UI
import { FontProvider } from "./components/providers/FontProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Toaster } from "./components/ui/sonner";

// Main App Routes Component
const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />

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
          path="/learn/repent"
          element={<RepentancePage />}
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
          path="/learn/joseph"
          element={<JosephPageTemplate />}
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
          element={<ComingSoonPage title="Our Locations" />}
        />
        <Route
          path="/donate"
          element={<ComingSoonPage title="Donate" />}
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

        {/* 404 page for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

// Main App Component
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <FontProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster />
          <AppRoutes />
        </BrowserRouter>
      </FontProvider>
    </ThemeProvider>
  );
}