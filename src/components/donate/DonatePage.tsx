import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useConvex } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { DollarSign, CreditCard, Wallet } from "lucide-react";

type Frequency = "one_time" | "weekly" | "monthly";

export function DonatePage() {
  const convex = useConvex();
  const { user } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>("one_time");
  const [coverFees, setCoverFees] = useState(false);
  const currency = "usd";

  useEffect(() => {
    const full = user?.fullName || [user?.firstName, user?.lastName].filter(Boolean).join(" ");
    const mail = user?.primaryEmailAddress?.emailAddress || "";
    if (user) {
      setName(full || "");
      setEmail(mail);
    }
  }, [user]);

  const parsedAmount = useMemo(() => {
    const v = Number(amount);
    return Number.isFinite(v) && v > 0 ? v : 0;
  }, [amount]);

  const canSubmit = useMemo(() => {
    if (user) return parsedAmount > 0;
    return !!name && !!email && parsedAmount > 0;
  }, [user, name, email, parsedAmount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/[^0-9.]/g, "");
    const i = v.indexOf(".");
    if (i !== -1) {
      v = v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, "");
    }
    setAmount(v);
  };

  const submit = async () => {
    if (!canSubmit) return;
    const cents = Math.round(parsedAmount * 100);
    const result = await convex.action("donations:createCheckoutSession", {
      amountCents: cents,
      currency,
      coverFees,
      clerkUserId: user?.id,
    });
    if (result?.url) {
      window.location.href = result.url;
    }
  };

  return (
    <div className="container max-w-3xl mx-auto p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-2">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-serif">Donate</h1>
                <p className="text-sm text-muted-foreground">Secure checkout via Stripe</p>
              </div>
            </div>

            {!user && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input id="amount" inputMode="decimal" type="text" value={amount} onChange={handleAmountChange} placeholder="50" />
              </div>
              <div className="space-y-2">
                <Label>Frequency</Label>
                <Select value={frequency} onValueChange={(v) => setFrequency(v as Frequency)}>
                  <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one_time">One-time</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Options</Label>
                <Button type="button" variant={coverFees ? "default" : "outline"} onClick={() => setCoverFees((v) => !v)} className="w-full">
                  {coverFees ? "Fees covered" : "Cover fees"}
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary"><Wallet className="w-4 h-4 mr-1" /> Cash App Pay</Badge>
              <Badge variant="secondary"><CreditCard className="w-4 h-4 mr-1" /> Apple Pay</Badge>
              <Badge variant="secondary"><CreditCard className="w-4 h-4 mr-1" /> Card</Badge>
            </div>

            <div className="flex gap-3">
              <Button disabled={!canSubmit} onClick={submit} className="bg-primary">
                Continue to Checkout
              </Button>
              <Button variant="outline" onClick={() => { setName(""); setEmail(""); setAmount(""); setFrequency("one_time"); setCoverFees(false); }}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
