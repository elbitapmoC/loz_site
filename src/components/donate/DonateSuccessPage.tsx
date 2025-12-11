import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

export function DonateSuccessPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const sessionId = params.get("session_id") || "";
  return (
    <div className="container max-w-xl mx-auto p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-2">
          <CardContent className="p-6 space-y-6 text-center">
            <div className="flex items-center justify-center">
              <div className="p-3 bg-primary/10 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-serif">Thank you for your support</h1>
            <p className="text-sm text-muted-foreground">Your donation was received.</p>
            {sessionId && (
              <p className="text-xs text-muted-foreground">Reference: {sessionId}</p>
            )}
            <div className="flex justify-center">
              <Link to="/">
                <Button>Go Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

