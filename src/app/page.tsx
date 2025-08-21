"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Newspaper, Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* UNDER CONSTRUCTION BANNER */}
      <div className="bg-yellow-300 text-black text-center py-2 font-bold absolute top-0 w-full z-50">
        🚧 Website Under Construction 🚧
      </div>

      {/* NAVBAR */}
      <header className="border-b bg-white shadow-sm sticky top-8 z-40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Law & Platforms</div>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600">About</a></li>
            <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow mt-8">
        <section className="text-center py-24 bg-gradient-to-r from-indigo-50 to-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Exploring Digital Markets & Platform Regulation
          </motion.h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights on law, competition, and the future of platform governance.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Learn More</Button>
          </motion.div>
        </section>

        {/* FEATURE CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="text-center">
              <BookOpen className="mx-auto text-indigo-600 w-10 h-10" />
              <h3 className="mt-4 font-semibold text-lg">About the Project</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Learn about our research on competition, law, and platform regulation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <Newspaper className="mx-auto text-indigo-600 w-10 h-10" />
              <h3 className="mt-4 font-semibold text-lg">Latest Blog</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Stay updated with insights on law, AI, and digital markets.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <LinkIcon className="mx-auto text-indigo-600 w-10 h-10" />
              <h3 className="mt-4 font-semibold text-lg">Resources</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Access curated research materials, cases, and useful links.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-6 mt-auto">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} lawandplatforms.com — All rights reserved.
        </p>
      </footer>
    </div>
  );
}