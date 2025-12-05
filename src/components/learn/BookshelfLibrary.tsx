import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  BookOpen,
  Users,
  Mountain,
  Scroll,
  Shield,
  X,
  BookMarked,
  Library,
  Quote,
  Calendar,
  MapPin,
} from "lucide-react";

interface Book {
  id: string;
  title: string;
  author?: string;
  spine_color: string;
  category: "academic" | "historical" | "documentation";
  icon: any;
  content: {
    description: string;
    details: string[];
    source?: string;
    pages?: string;
    quote?: string;
  };
}

const books: Book[] = [
  // Academic Sources
  {
    id: "after-columbus",
    title: "After Columbus",
    author: "Herman J. Viola",
    spine_color: "from-primary to-primary/80",
    category: "academic",
    icon: BookOpen,
    content: {
      description: "Herman J. Viola documents Seminole origins and their resistance to colonial forces through comprehensive historical research.",
      details: [
        "Documents the formation of the Seminole tribe from Creek refugees",
        "Chronicles their fierce resistance to Spanish and American colonization",
        "Explores the unique social structure that welcomed runaway slaves",
        "Details the three Seminole Wars and their outcomes"
      ],
      source: "Smithsonian Institution scholarly publication",
      pages: "Pages 138, 143-146",
    }
  },
  {
    id: "black-indians",
    title: "Black Indians",
    author: "William Loren Katz",
    spine_color: "from-accent to-accent/80",
    category: "academic", 
    icon: Users,
    content: {
      description: "William Loren Katz explores the unique relationship between Seminoles and African Americans, revealing shared heritage and resistance.",
      details: [
        "Documents intermarriage between Seminoles and escaped slaves",
        "Shows how both groups preserved Hebrew cultural practices",
        "Chronicles joint resistance against enslavement and removal",
        "Reveals the biblical connection to the tribe of Reuben"
      ],
      source: "Historical research on African-Native American relations",
      pages: "Pages 56-62",
    }
  },
  {
    id: "500-nations", 
    title: "500 Nations",
    author: "Alvin M. Josephy Jr.",
    spine_color: "from-secondary to-secondary/80",
    category: "academic",
    icon: Mountain,
    content: {
      description: "Alvin M. Josephy Jr. chronicles the comprehensive history of Native American nations, including the Seminole connection to ancient Israel.",
      details: [
        "Comprehensive tribal histories across North America",
        "Documents migration patterns from ancient times",
        "Chronicles the resistance movements of various tribes",
        "Connects Native American tribes to Old World origins"
      ],
      source: "Comprehensive Native American historical documentation",
      pages: "Pages 130, 325",
    }
  },
  // Historical Evidence
  {
    id: "montezinos-account",
    title: "The Montezinos Account",
    author: "Antonio de Montezinos",
    spine_color: "from-chart-3 to-chart-3/80",
    category: "historical",
    icon: Scroll,
    content: {
      description: "Spanish explorer Antonio Montezinos documented his encounter with Seminoles in the mountains of Quito, where they recited the Shema in Hebrew.",
      details: [
        "Encountered Seminoles in Quito mountains who spoke Hebrew",
        "Witnessed them reciting the Shema daily prayer",
        "Documented their claim to be descendants of Reuben",
        "Recorded their knowledge of biblical history and law"
      ],
      source: "Found in 'Lost Tribes and Promised Lands' by Ronald Sanders",
      quote: "They identified themselves as descendants of the tribe of Reuben and demonstrated knowledge of Hebrew prayers."
    }
  },
  {
    id: "migration-evidence",
    title: "Migration Pattern Evidence", 
    author: "Historical Records",
    spine_color: "from-chart-4 to-chart-4/80",
    category: "historical",
    icon: MapPin,
    content: {
      description: "Historical records document the 'Ten Tribes of Israel' migration to the Americas in 536 B.C., with Seminoles showing distinct Hebrew practices.",
      details: [
        "Documents 536 B.C. migration from Middle East to Americas",
        "Traces movement from Creek territories to Florida Everglades", 
        "Records preservation of Hebrew cultural practices",
        "Chronicles maintenance of tribal identity through adversity"
      ],
      source: "Documented Migration History archives",
      quote: "The migration of the Ten Tribes to the Americas brought the descendants of Reuben to what is now known as Florida."
    }
  },
  {
    id: "unconquered-legacy",
    title: "The Unconquered Legacy",
    author: "Prophecy Fulfilled",
    spine_color: "from-chart-5 to-chart-5/80", 
    category: "historical",
    icon: Shield,
    content: {
      description: "The Seminoles' fierce resistance and survival through multiple wars fulfills the biblical prophecy about Reuben's descendants.",
      details: [
        "Survived three major wars without defeat",
        "Maintained independence in Florida Everglades",
        "Preserved Hebrew identity through persecution",
        "Fulfilled prophecy: 'Let Reuben live and not die'"
      ],
      source: "Biblical prophecy and historical record correlation",
      quote: "Let Reuben live and not die; and let not his men be few. - Deuteronomy 33:6"
    }
  },
  // Additional Documentation
  {
    id: "historical-facts",
    title: "Key Historical Facts",
    author: "Compiled Evidence",
    spine_color: "from-chart-2 to-chart-2/80",
    category: "documentation",
    icon: BookMarked,
    content: {
      description: "Essential facts documenting the Seminole connection to the biblical tribe of Reuben through historical evidence.",
      details: [
        "Called 'cimmarones' (runaways) by Spanish, became 'Seminole'",
        "Originally Oconee Creek Indians who fled Georgia in 1700s",
        "Refused to enslave others, welcomed runaway slaves",
        "Maintained Hebrew prayers and identified as Israelites",
        "Survived multiple wars fulfilling biblical prophecy",
        "Known as 'The Unconquered Tribe' for fierce resistance"
      ],
      source: "Compiled from multiple historical sources and documentation"
    }
  }
];

export function BookshelfLibrary() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedBook(null);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Only show Heritage Library if there are tribe-specific books */}
      {books && books.length > 0 && (
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Library className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Heritage Library</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the documented evidence connecting the Seminole people to
            the biblical tribe of Reuben through scholarly research and
            historical records.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Click on any book to open and explore its contents
          </p>
        </motion.div>

        {/* Bookshelf */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >            
            {/* Shelf Surface */}
            <div className="relative bg-gradient-to-b from-accent/50 to-accent/30 rounded-xl border border-accent/30 p-6 shadow-inner">
              {/* Books Container */}
              <div className="flex md:flex-wrap md:justify-center gap-1 md:gap-3 min-h-[280px] items-end overflow-x-auto md:overflow-x-visible scrollbar-hide pb-4 md:pb-0 px-4 md:px-0 justify-start md:justify-center">
                {books.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8, 
                      rotateY: 5,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="perspective-1000 cursor-pointer"
                    onClick={() => handleBookClick(book)}
                  >
                    {/* Book Spine */}
                    <div className={`
                      w-16 h-64 md:w-16 md:h-72 relative transform-gpu
                      bg-gradient-to-b ${book.spine_color} 
                      rounded-r-lg shadow-lg
                      border-r border-b border-black/10 dark:border-white/10
                      hover:shadow-xl transition-all duration-300
                      hover:-translate-y-1
                    `}>
                      {/* Book spine highlight */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-white/30 dark:bg-white/20 rounded-r"></div>
                      
                      {/* Book title - rotated */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="transform rotate-90 origin-center">
                          <div className="text-white text-xs md:text-sm font-bold text-center whitespace-nowrap px-2">
                            {book.title}
                          </div>
                          {book.author && (
                            <div className="text-white/80 text-xs text-center mt-1">
                              {book.author.split(' ').slice(0, 2).join(' ')}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Category icon */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <book.icon className="h-3 w-3 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Shelf Edge */}
              <div className="h-3 bg-gradient-to-b from-accent/50 to-accent/30 rounded-b-lg mt-4 border-t border-accent/30 shadow-md"></div>
            </div>

            {/* Category Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-b from-primary to-primary/80 rounded mr-2"></div>
                <span className="text-muted-foreground">Academic Sources</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-b from-chart-3 to-chart-3/80 rounded mr-2"></div>
                <span className="text-muted-foreground">Historical Evidence</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-b from-chart-2 to-chart-2/80 rounded mr-2"></div>
                <span className="text-muted-foreground">Documentation</span>
              </div>
            </div>
        </motion.div>

        {/* Book Modal using ShadCN Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden p-0">
            {selectedBook && (
              <>
                {/* Book Header */}
                <div className={`relative p-6 bg-gradient-to-br ${selectedBook.spine_color} text-white rounded-t-lg`}>
                  <div className="text-center">
                    <selectedBook.icon className="h-10 w-10 mx-auto mb-3 text-white/90" />
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold mb-2 text-white">
                        {selectedBook.title}
                      </DialogTitle>
                      <DialogDescription className="text-white/80 text-sm">
                        {selectedBook.author ? `By ${selectedBook.author}` : 'Historical documentation'}
                      </DialogDescription>
                    </DialogHeader>
                    {selectedBook.author && (
                      <p className="text-white/80 mb-2 mt-2">{selectedBook.author}</p>
                    )}
                    <Badge className="bg-white/20 text-white border-white/30 mt-2">
                      {selectedBook.category === "academic" ? "Academic Source" : 
                       selectedBook.category === "historical" ? "Historical Evidence" : 
                       "Documentation"}
                    </Badge>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-200px)] p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {selectedBook.content.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BookMarked className="h-4 w-4 mr-2 text-primary" />
                      Key Points
                    </h4>
                    <ul className="space-y-2">
                      {selectedBook.content.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedBook.content.quote && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <Quote className="h-4 w-4 text-primary mb-2" />
                      <blockquote className="text-muted-foreground italic text-sm">
                        "{selectedBook.content.quote}"
                      </blockquote>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {selectedBook.content.source && (
                        <Badge variant="outline" className="text-xs">
                          {selectedBook.content.source}
                        </Badge>
                      )}
                      {selectedBook.content.pages && (
                        <Badge variant="outline" className="text-xs">
                          {selectedBook.content.pages}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
      )}
    </section>
  );
}
