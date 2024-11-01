'use client'

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, Mail, Moon, Sun } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.parallax-element');
      const mouseX = (e.clientX - window.innerWidth / 2) / 50;
      const mouseY = (e.clientY - window.innerHeight / 2) / 50;

      elements.forEach((element) => {
        const el = element as HTMLElement;
        el.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold">AS</Link>
          <div className="hidden md:flex space-x-4">
            {["Home", "About", "Skills", "Experience", "Projects", "Education"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="nav-link hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item}
              </Link>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 parallax-container">
        <div className="container mx-auto px-6 text-center parallax-element">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-2"
          >
            Aladin Sabbagh
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl mb-8"
          >
            Data Scientist | ML Engineer | MLOps Specialist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Driving innovation through AI and Machine Learning
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center space-x-4"
          >
            <Button className="button-glow" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" className="button-glow" asChild>
              <Link href="#skills">View Skills</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <Link href="https://github.com/alaeddine-abbagh" target="_blank" className="social-icon">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/aladin-sabbagh-4310b6104/" target="_blank" className="social-icon">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:sabbaghalaeddine@gmail.com" className="social-icon">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-fade">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image 
                src="/img_logo/pro_me.jpeg" 
                alt="Aladin Sabbagh" 
                width={300} 
                height={300} 
                className="rounded-full profile-scale"
                priority
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-lg text-fade">
              With 5 years of experience in the AI ecosystem and 12 years coaching Math Olympiads, 
              I bring a strong mathematical foundation and a proven track record of identifying business needs and tailoring AI solutions to meet them. 
              By always following the latest industry best practices and methodologies, I have successfully led teams in deploying AI solutions into production, enhancing developer productivity, and driving impactful results through effective team leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Machine Learning", skills: ["TensorFlow", "PyTorch", "MLOps", "Deep Learning"] },
              { title: "Programming", skills: ["Python", "R", "Flutter", "CI/CD"] },
              { title: "AI Applications", skills: ["Generative AI", "LLMs","NLP", "Real-time Monitoring"] },
              { title: "Domain Expertise", skills: ["Fraud Detection", "Financial Analytics", "Risk Assessment", "Sustainable Finance"] }
            ].map((category, index) => (
              <Card key={index} className="p-6 hover-card">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="list-disc list-inside">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: "Risk Department – Innovation Team",
                company: "BNPP Bank",
                date: "September 2023 - Present",
                responsibilities: [
                  "Lead AI and MLOps initiatives for risk management, deploying LLMs and generative AI for advanced risk assessment ( RAG and Summarisation)",
                  "Prompt Engineering Research : Experiment with different prompt techniques to optimize LLM outputs for various tasks",
                  "Establish MLOps best practices, integrating CI/CD pipelines for model deployment on cloud and edge environments",
                  "Develop an assistant that helps programmers by suggesting code snippets, increasing team productivity",
                  "Innovate on model optimization techniques including pruning and quantization for edge device constraints"
                ]
              },
              {
                title: "Compliance Department – Fraud Detection and Transaction Monitoring",
                company: "BNPP Bank",
                date: "September 2021 - August 2023",
                responsibilities: [
                  "Built NLP-based fraud detection models and optimized name-screening algorithms, reducing fraud rates by 25%",
                  "RAG solution: Reduced compliance check time by 40% through automated processing",
                  "LLM Chatbot: Collaborated with compliance officers to ensure regulatory alignment",
                  "Utilized TensorFlow and PyTorch to improve detection accuracy and minimize false positives"
                ]
              },
              {
                title: "ESG Department – Sustainable Finance & Climate Change",
                company: "BNPP Bank",
                date: "February 2020 - August 2021",
                responsibilities: [
                  "Developed AI models to monitor and reduce CO2 emissions across real estate assets",
                  "Contributed to BNPP's sustainable finance goals aligned with the 2015 Paris Climate Agreement",
                 ]
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 hover-card">
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <h4 className="text-xl mb-2">{job.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{job.date}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[

{
  title: "Emoji Generator ( click here to check it)",
  description: "An LLM emoji generator in production, click here to check it out"
}, 
              {
                title: "Icebreaker: People Search with LLMs",
                description: "Developed a Streamlit-powered Langchain Python application that leverages LLM technology to search and analyze information about individuals, providing comprehensive insights from internet sources."
              },
              {
                title: "LLM for Mathematics ( coming live soon)",
                description: "Specialized language model fine-tuned for mathematical problem-solving and theorem proving applications."
              },
              {
                title: "Flutter & C+ Development Suite",
                description: "Created multiple web and Android applications including an interactive Quiz App for knowledge testing and a comprehensive Meal Planning app with recipe management features."
              },
              {
                title: "RAG (Retrieval-Augmented Generation)",
                description: "Implementation of a RAG system that enhances LLM responses with real-time document retrieval and context integration."
              },
             
              {
                title: "LLM Fine Tuning",
                description: "Advanced techniques for customizing large language models to specific domains while maintaining efficiency and performance."
              }
             
            ].map((project, index) => (
              <Card key={index} className="p-6 hover-card">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-8">
            {[
              {
                school: "ENS Paris Saclay (1st in the world in Math)",
                degree: "Master degree: MVA-Math Vision apprentissage",
                date: "2019 - 2020",
                logo: "/img_logo/ens_logo.png",
                link: "https://www.shanghairanking.com/rankings/gras/2022/RS0101#RS0101-1"
              },
              {
                school: "Telecom Paris",
                degree: "Engineering Degree: Data Science and applied Math",
                date: "2018 - 2020",
                logo: "/img_logo/telecom_logo.png",
                link: "https://www.telecom-paris.fr/en/school/rankings"
              }
            ].map((edu, index) => (
              <Card key={index} className="p-6 hover-card">
                <Link href={edu.link} target="_blank" className="flex items-center">
                  <Image 
                    src={edu.logo} 
                    alt={`${edu.school} Logo`} 
                    width={80} 
                    height={80} 
                    className="mr-4"
                    priority
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.date}</p>
                    <p>{edu.degree}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certificates Section */}
      <section id="certificates" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & certificates</h2>
          <div className="space-y-4">
            <div className="text-lg">
              <Link href="https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                Machine Learning Engineering for Production (MLOps) Specialization
              </Link>
              <span className="text-gray-600 dark:text-gray-400"> (5 courses | 6 Months| Coursera)</span>
            </div>
            <div className="text-lg">
              <Link href="https://www.coursera.org/learn/machine-learning-operations-mlops-fundamentals" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                MLOps (Machine Learning Operations) Fundamentals
              </Link>
            </div>
            <div className="text-lg">
              The R Programming Environment (Coursera)
            </div>
            <div className="text-lg">
              <Link href="https://www.coursera.org/learn/financial-risk-management-with-r" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              Financial Risk Management with R
              </Link>
            </div>
            <div className="text-lg">
              <Link href="https://www.coursera.org/specializations/deep-learning" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                Deep Learning Specialization
              </Link>
              <span className="text-gray-600 dark:text-gray-400"> (5 courses | 6 Months | Coursera)</span>
            </div>
            <div className="text-lg">
              Math Olympiad Coach (for the French and Tunisian) teams since 10 years
            </div>
            <div className="text-lg">
              Honorable mention in IMO (International Math Olympiads) 
            </div>
            <div className="text-lg">
              Silver medal in PAMO (African Math Olympiads) 
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-700 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Aladin Sabbagh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
