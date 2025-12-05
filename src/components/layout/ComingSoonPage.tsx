import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Fixed import from motion/react to framer-motion to match project consistency
import { Button } from "../ui/button";
import { ArrowLeft, Construction } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Cinematic Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {title === "Learn the Truth" ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl w-full mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary/40 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the foundations of our faith through these essential teachings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <Link to="/learn/12-tribes" className="group relative overflow-hidden rounded-xl border border-border dark:border-white/10 bg-background/40 backdrop-blur-sm hover:bg-primary/5 transition-all duration-500 p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500" />
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                The 12 Tribes
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Trace the lineage and identity of the Israelites today.
              </p>
            </Link>

            <Link to="/learn/holy-days" className="group relative overflow-hidden rounded-xl border border-border dark:border-white/10 bg-background/40 backdrop-blur-sm hover:bg-primary/5 transition-all duration-500 p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                Holy Days
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                The appointed feasts and festivals of the Most High.
              </p>
            </Link>

            <Link to="/learn/pagan-holidays" className="group relative overflow-hidden rounded-xl border border-border dark:border-white/10 bg-background/40 backdrop-blur-sm hover:bg-primary/5 transition-all duration-500 p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                Pagan Holidays
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Uncovering the truth behind modern celebrations.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="hover:bg-primary/5 text-muted-foreground hover:text-primary">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-lg mx-auto p-8 border border-border dark:border-white/10 rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Construction className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">
            {title}
          </h1>
          
          <div className="w-24 h-1 bg-primary/20 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We are currently preparing this section to better serve our community. 
            Please check back soon for updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
