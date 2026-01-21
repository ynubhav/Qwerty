import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, PenTool, Users, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
        >
            Qwerty<span className="text-amber-500">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          A space where ideas turn into stories, and stories connect the world.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Button onClick={()=>navigate('/blog/workspace/create')} size="lg" className="rounded-full">
            Start Writing <PenTool className="ml-2 h-5 w-5" />
          </Button>
          <Button onClick={()=>navigate('/feed')} size="lg" variant="outline" className="rounded-full">
            Explore Blogs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900">
            <BookOpen className="mx-auto h-12 w-12 text-amber-500" />
            <h3 className="mt-4 text-2xl font-semibold">Read Anywhere</h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Discover stories and blogs curated for your interests, on any
              device.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900">
            <PenTool className="mx-auto h-12 w-12 text-amber-500" />
            <h3 className="mt-4 text-2xl font-semibold">Write with Ease</h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              A clean editor designed to keep you focused on your words.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900">
            <Users className="mx-auto h-12 w-12 text-amber-500" />
            <h3 className="mt-4 text-2xl font-semibold">Join the Community</h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Connect with readers and writers who share your passions.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION - TRENDING BLOGS / FEATURED AUTHORS */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
          Featured Authors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[{name:"Alex",img:"https://avatars.githubusercontent.com/u/122999?v=4"},
           {name:"Bob",img:"https://avatars.githubusercontent.com/u/176582?v=4"}, 
           {name:"Charlie",img:"https://avatars.githubusercontent.com/u/127799?v=4"}].map((data,index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
                <img className="h-24 w-24 rounded-full bg-amber-500 mb-4 flex items-center justify-center text-white text-xl font-bold" src={data.img} alt="" />
              
              <h3 className="text-xl font-semibold">{data.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                Inspiring stories and insights from top writers.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE / CTA SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <Quote className="w-14 h-14 text-amber-500 mb-6" />
        <p className="max-w-3xl text-center text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
          “Stories are the currency of human connection. Every word you share
          builds a bridge to someone new.”
        </p>
        <div className="mt-10 flex gap-4">
          <Button onClick={()=>navigate('/blog/workspace/create')} size="lg" className="rounded-full">
            Start Writing Now
          </Button>
          <Button onClick={()=>navigate('/feed')} size="lg" variant="outline" className="rounded-full">
            Browse Blogs
          </Button>
        </div>
      </section>
    </div>
  );
}
