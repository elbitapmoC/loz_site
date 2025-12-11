import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useConvex } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function DonateSuccessPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const sessionId = params.get("session_id") || "";
  const convex = useConvex();
  const [status, setStatus] = useState<string>("");
  const fired = useRef(false);
  const mounted = useRef(false);
  const timeoutId = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!sessionId) return;
    mounted.current = true;
    let attempts = 0;
    let stop = false;
    const check = async () => {
      try {
        const d = await convex.query(api.donations.getDonationStatusBySession, { stripeSessionId: sessionId });
        const s = d?.status || "";
        if (!mounted.current) return;
        setStatus(s);
        if (s === "succeeded" && !fired.current) {
          fired.current = true;
          const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (reduceMotion) return;
          const duration = 3500;
          const end = Date.now() + duration;
          const frame = () => {
            if (!mounted.current) return;
            confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"] });
            confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"] });
            if (Date.now() < end && mounted.current) {
              rafId.current = requestAnimationFrame(frame);
            }
          };
          frame();
          stop = true;
          return;
        }
      } catch {}
      if (!stop && attempts < 10) {
        attempts += 1;
        timeoutId.current = window.setTimeout(check, 1000);
      }
    };
    check();
    return () => {
      mounted.current = false;
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [sessionId, convex]);
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
          {status === "succeeded" ? (
            <motion.p
              className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1.08, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              Donation received — HalleluYah!
            </motion.p>
          ) : (
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Processing your donation...
            </motion.p>
          )}
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
