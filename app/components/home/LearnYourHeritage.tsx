import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  BookOpen,
  Calendar,
  Users,
  ArrowRight,
  Star,
  GraduationCap,
  Scroll,
  Crown,
} from "lucide-react";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  topics: string[];
  icon: React.ReactNode;
  route: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  color: {
    gradient: string;
    badge: string;
    icon: string;
  };
}

export function LearnYourHeritage() {
  const learningPaths: LearningPath[] = [
    {
      id: "12-tribes",
      title: "The 12 Tribes of Israel",
      description: "Discover your biblical lineage and understand the identity of the scattered tribes in modern times.",
      topics: ["Biblical History", "Modern Identity", "Prophecy Fulfillment"],
      icon: <Crown className="w-6 h-6" />,
      route: "/learn/12-tribes",
      difficulty: "Beginner",
      featured: true,
      color: {
        gradient: "from-amber-500 to-yellow-500",
        badge: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
        icon: "text-amber-600 dark:text-amber-400",
      },
    },
    {
      id: "israelites-today",
      title: "Who Are The Israelites Today?",
      description: "Explore the biblical and historical evidence of the true identity of the Israelites in today's world.",
      topics: ["Biblical Evidence", "Historical Research", "Modern Application"],
      icon: <Users className="w-6 h-6" />,
      route: "/learn/israelites-today",
      difficulty: "Intermediate",
      color: {
        gradient: "from-blue-500 to-indigo-500",
        badge: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
        icon: "text-blue-600 dark:text-blue-400",
      },
    },
    {
      id: "biblical-holy-days",
      title: "Biblical Holy Days",
      description: "Learn about the sacred appointed times established by the Most High and their significance today.",
      topics: ["Feast Days", "New Moons", "Sabbaths"],
      icon: <Calendar className="w-6 h-6" />,
      route: "/learn/biblical-holy-days",
      difficulty: "Beginner",
      color: {
        gradient: "from-green-500 to-emerald-500",
        badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
        icon: "text-green-600 dark:text-green-400",
      },
    },
    {
      id: "repent",
      title: "How Do I Repent?",
      description: "A step-by-step guide to true biblical repentance and returning to the ways of the Most High.",
      topics: ["Repentance Process", "Biblical Examples", "Practical Steps"],
      icon: <BookOpen className="w-6 h-6" />,
      route: "/learn/repent",
      difficulty: "Beginner",
      color: {
        gradient: "from-purple-500 to-pink-500",
        badge: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        icon: "text-purple-600 dark:text-purple-400",
      },
    },
    {
      id: "biblical-calendar",
      title: "Biblical Calendar",
      description: "Understanding the true calendar system as ordained by the Creator and how to observe it.",
      topics: ["Calendar System", "Moon Phases", "Season Calculations"],
      icon: <Scroll className="w-6 h-6" />,
      route: "/learn/biblical-calendar",
      difficulty: "Advanced",
      color: {
        gradient: "from-red-500 to-orange-500",
        badge: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
        icon: "text-red-600 dark:text-red-400",
      },
    },
    {
      id: "pagan-holidays",
      title: "Pagan Holidays",
      description: "Understand the origins of modern holidays and why we should avoid celebrating pagan traditions.",
      topics: ["Holiday Origins", "Biblical Alternatives", "Truth Revealed"],
      icon: <GraduationCap className="w-6 h-6" />,
      route: "/learn/pagan-holidays",
      difficulty: "Intermediate",
      color: {
        gradient: "from-gray-500 to-slate-500",
        badge: "bg-gradient-to-r from-gray-500 to-slate-500 text-white",
        icon: "text-gray-600 dark:text-gray-400",
      },
    },
  ];

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5"></div>
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50"
      ></motion.div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium mb-8 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            Discover Biblical Truth
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Learn Your Heritage
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Embark on a transformative journey of biblical discovery. Uncover your true identity and understand your place in biblical history.
          </motion.p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${path.color.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        {path.icon}
                      </div>
                      {path.featured && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-200 fill-current" />
                          <span className="text-xs font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                    <Badge className={difficultyColors[path.difficulty]}>
                      {path.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <Link href={path.route}>
                    <Button 
                      variant="outline" 
                      className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20"
        >
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with our foundational courses or dive deep into advanced biblical studies. 
            Each path is designed to build upon biblical truth and historical evidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/welcome-booklet">
              <Button variant="outline" size="lg">
                Download Welcome Guide
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}