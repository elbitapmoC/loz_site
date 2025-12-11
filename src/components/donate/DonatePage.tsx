import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useConvex } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { DollarSign, CreditCard, Heart, ShieldCheck, Calendar, Banknote, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type Frequency = "one_time" | "weekly" | "monthly";

export function DonatePage() {
  const convex = useConvex();
  const { user } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>("one_time");
  const [coverFees, setCoverFees] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState<"card" | "apple" | "cash">("card");
  const currency = "usd";
  const MIN_DONATION = 5;

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
    if (user) return parsedAmount >= MIN_DONATION;
    return !!name && !!email && parsedAmount >= MIN_DONATION;
  }, [user, name, email, parsedAmount]);
  const tooSmall = parsedAmount > 0 && parsedAmount < MIN_DONATION;
  const feePct = 0.029;
  const feeFixed = 0.3;
  const estimatedFee = parsedAmount > 0 ? (parsedAmount + feeFixed) / (1 - feePct) - parsedAmount : 0;
  const processingFee = coverFees ? estimatedFee : 0;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/[^0-9.]/g, "");
    const i = v.indexOf(".");
    if (i !== -1) {
      v = v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, "");
    }
    setAmount(v);
  };

  const submit = async () => {
    if (!canSubmit || selectedMethod !== "card") return;
    try {
      const cents = Math.round(parsedAmount * 100);
      const result = await convex.action(api.donations.createCheckoutSession, {
        amountCents: cents,
        currency,
        coverFees,
        clerkUserId: user?.id,
      });
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (e: any) {
      const msg = e?.message || "Unable to start checkout";
      toast.error(msg);
    }
  };

  if (!user) {
    return (
      <div className="container max-w-3xl mx-auto p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <CardContent className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-2">Donate</h1>
                <p className="text-muted-foreground">Secure checkout via Stripe</p>
              </div>

              <div className="flex flex-col items-center justify-center p-10 text-center bg-background/50 rounded-xl border border-border/50">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Join Our Community</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Please sign in to make a donation and track your giving history.
                </p>
                <Button asChild className="px-8">
                  <Link to="/signin">Sign In to Donate</Link>
                </Button>
                <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground pt-6">
                  <ShieldCheck className="h-3 w-3" />
                  <span>Secure checkout powered by Stripe</span>
                </div>
              </div>
            </CardContent>
          
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 py-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">Donate</h1>
          <p className="text-lg text-muted-foreground">Secure checkout via Stripe</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card>
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="amount" className="text-base font-medium">Amount (USD)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-lg">$</span>
                    <Input
                      id="amount"
                      type="number"
                      min={MIN_DONATION}
                      step={1}
                      value={amount}
                      onChange={handleAmountChange}
                      className="pl-10 h-14 text-lg bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all"
                      placeholder="0.00"
                      aria-label="Donation amount in US dollars"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Minimum ${MIN_DONATION.toFixed(0)}{tooSmall ? " (increase amount)" : ""}</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">Frequency</Label>
                  <Select value={frequency} onValueChange={(v) => setFrequency(v as Frequency)}>
                    <SelectTrigger
                      className="bg-background/50 border-border/60 focus:ring-primary/20"
                      style={{ minHeight: 56 }}
                    >
                      <SelectValue className="text-lg" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one_time">One-time</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-background/40 border border-border/40 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Options</Label>
                  <p className="text-sm text-muted-foreground">Add ${estimatedFee.toFixed(2)} to cover processing fees</p>
                </div>
                <Button
                  type="button"
                  variant={coverFees ? "default" : "outline"}
                  onClick={() => setCoverFees((v) => !v)}
                  className={`sm:w-auto ${coverFees ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {coverFees ? (
                    <span className="flex items-center gap-2">
                      Fees Covered
                    </span>
                  ) : (
                    "Cover fees"
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("cash")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${selectedMethod === "cash" ? "bg-primary/10 border-primary text-primary ring-2 ring-primary/20" : "bg-background border-border hover:border-primary/50 text-muted-foreground"}`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <rect width="16" height="16" rx="3" fill="#00C244" />
                      <path
                        fill="#ffffff"
                        d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"
                      />
                    </svg>
                    Cash App Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("apple")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${selectedMethod === "apple" ? "bg-primary/10 border-primary text-primary ring-2 ring-primary/20" : "bg-background border-border hover:border-primary/50 text-muted-foreground"}`}
                  >
                    Donate with <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    </svg>
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("card")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${selectedMethod === "card" ? "bg-primary/10 border-primary text-primary ring-2 ring-primary/20" : "bg-background border-border hover:border-primary/50 text-muted-foreground"}`}
                  >
                    <CreditCard className="h-4 w-4" />
                    Card
                  </button>
                </div>

                <div className="min-h-[80px] transition-all">
                  {selectedMethod !== "card" && (
                    <div className="p-6 border rounded-xl bg-background/50 text-center">
                      <p className="text-muted-foreground">
                        Please use the Card option for now. {selectedMethod === "apple" ? "Apple Pay" : "Cash App Pay"} integration coming soon.
                      </p>
                      <Button
                        variant="link"
                        onClick={() => setSelectedMethod("card")}
                        className="mt-2 text-primary"
                      >
                        Switch to Card
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <Button disabled={!canSubmit || selectedMethod !== "card"} onClick={submit} className="flex-1 h-12 text-base shadow-lg shadow-primary/20">
                  {`Donate $${(parsedAmount + processingFee).toFixed(2)}`}
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6"
                  onClick={() => { setName(""); setEmail(""); setAmount(""); setFrequency("one_time"); setCoverFees(false); }}
                >
                  Reset
                </Button>
              </div>

              <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground pt-4">
                <ShieldCheck className="h-3 w-3" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Tax Deductible</h3>
              <p className="text-sm text-muted-foreground mt-1">501(c)(3) nonprofit organization</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Secure & Encrypted</h3>
              <p className="text-sm text-muted-foreground mt-1">256-bit SSL encryption</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Flexible Giving</h3>
              <p className="text-sm text-muted-foreground mt-1">One-time or monthly support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
