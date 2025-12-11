import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export function DonateSuccessPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const sessionId = params.get("session_id") || "";

  useEffect(() => {
    if (!sessionId) return;
    const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, [sessionId]);
  return (
    <div className="container max-w-xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <aside className="p-6 space-y-6 text-center">
          <div className="flex items-center justify-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <motion.h1
            className="text-3xl md:text-4xl font-serif font-semibold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.06, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            Thawadah for your support!
          </motion.h1>
          <motion.p
            className="text-4xl md:text-5xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-blue-600"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1.08, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
          >
            Donation received — HalleluYah!
          </motion.p>
          {sessionId && (
            <p className="text-xs text-muted-foreground">
              Reference: {sessionId}
            </p>
          )}
          <div className="flex justify-center">
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </aside>
      </motion.div>
      {/* Confetti handled via canvas-confetti in effect */}
    </div>
  );
}
