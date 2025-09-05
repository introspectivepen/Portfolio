import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, FileText, X, Download, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// Define interfaces for TypeScript type safety
interface Slide {
  title: string;
  images: string[];
  content: JSX.Element;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  link: string;
  repo: string;
  pdfPath: string;
  slides: Slide[];
}

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [pdfError, setPdfError] = useState<boolean>(false);

  // IntersectionObserver for section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Preload images to prevent flickering
  useEffect(() => {
    if (selectedProject) {
      selectedProject.slides.forEach(slide => {
        slide.images.forEach(image => {
          const img = new Image();
          img.src = image;
        });
      });
    }
  }, [selectedProject]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomedImage) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeZoomModal();
      } else if (isModalOpen) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, selectedProject, zoomedImage, isModalOpen, currentImageIndex]);

  const projects: Project[] = [
    {
      title: "Brain - Controlled Assistive Interaction System",
      description: "Designed a hands-free computer control system using EEG signals with 92% classification accuracy via SVM, enabling real-time interaction.",
      tech: ["Python", "Arduino", "PyAutoGUI"],
      color: "bg-portfolio-blue",
      link: "",
      repo: "https://github.com/introspectivepen/BCI.git",
      pdfPath: "/pdfs/Bci.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">A system for hands-free computer control using EEG signals.</p>
            </>
          ),
        },
        {
          title: "Aim and Objectives",
          images: [],
          content: (
            <>
              <p className="text-white/70">Develop a system to aid insomnia recovery by collecting and analyzing brainwave signals.</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Collect brainwave data using non-invasive electrodes.</li>
                <li>Design an interactive app for cognitive tasks.</li>
                <li>Analyze brainwave patterns against healthy sleep data.</li>
                <li>Monitor recovery and provide feedback.</li>
              </ul>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/bci1.jpg",
            "/images/bci3.jpg",
            "/images/bci4.jpg",
            "/images/bci5.jpg"
          ],
          content: (
            <>
              <p className="text-white/70">Captured brainwave signals and app interface for personalized treatment plans.</p>
            </>
          ),
        },
        {
          title: "Control Flow",
          images: [],
          content: (
            <>
              <p className="text-white/70">Key components:</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Electrodes: Detect brainwave signals.</li>
                <li>ADC: Convert analog signals to digital.</li>
                <li>Noise Filtering: Remove interference.</li>
                <li>Interactive App: Displays brain activity.</li>
                <li>Data Storage and Analysis: Compare with healthy patterns.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Progress",
          images: [],
          content: (
            <>
              <p className="text-white/70">Hardware: Non-Invasive Electrodes, Raspberry Pi, Bluetooth Module, Power Adapter.</p>
              <p className="text-white/70">Software: IDE for programming.</p>
              <p className="text-white/70">Progress: Collected data, reviewed literature, finalized hardware, started survey paper.</p>
            </>
          ),
        },
        {
          title: "References",
          images: [],
          content: (
            <>
              <p className="text-white/70">Key references:</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Smith & Patel (2020). Journal of Neurotherapy.</li>
                <li>Carelli et al. (2021). IEEE Transactions.</li>
                <li>Kim & Kim (2019). Journal of Sleep Research.</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Uzhavan: AI Assistant for Farmers",
      description: "Multilingual web application for farmers with modules for soil testing, pest detection, crop management, and government schemes.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQL"],
      color: "bg-portfolio-teal",
      link: "https://agribot-btpr.onrender.com",
      repo: "https://github.com/Sreejith2003/AgriBot/tree/saminathan",
      pdfPath: "/pdfs/AgriBot.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">A multilingual AI assistant for farmers to enhance agricultural productivity.</p>
            </>
          ),
        },
        {
          title: "Problem Statement",
          images: [],
          content: (
            <>
              <p className="text-white/70">Small-scale farmers face challenges in:</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Soil testing and pest detection.</li>
                <li>Efficient irrigation and harvesting.</li>
                <li>Accessing government schemes.</li>
                <li>Multilingual support for low-literacy users.</li>
              </ul>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/Uzhavan1.png",
            "/images/Uzhavan2.png",
            "/images/Uzhavan3.png",
            "/images/Uzhavan4.png"
          ],
          content: (
            <>
              <p className="text-white/70">AI-driven interfaces for soil analysis, pest detection, and irrigation alerts.</p>
            </>
          ),
        },
        {
          title: "Key Features",
          images: [],
          content: (
            <>
              <ul className="list-disc list-inside text-white/70">
                <li>AI-based soil analysis (pH, moisture).</li>
                <li>Deep learning pest detection.</li>
                <li>Optimal planting and fertilization schedules.</li>
                <li>Smart irrigation and harvesting alerts.</li>
                <li>Multilingual voice and video support.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Outcomes",
          images: [],
          content: (
            <>
              <p className="text-white/70">Field visits for soil and yield data.</p>
              <p className="text-white/70">Added voice input and animated videos for accessibility.</p>
              <p className="text-white/70">Expected: 20–30% yield increase, 40% cost reduction.</p>
            </>
          ),
        },
        {
          title: "References",
          images: [],
          content: (
            <>
              <p className="text-white/70">Key references:</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Javaid et al. (2023). Advanced Agrochem.</li>
                <li>Khan et al. (2024). Precision Agriculture.</li>
                <li>Li et al. (2024). BMC Bioinformatics.</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Audio to Text Transcriber",
      description: "A full-stack web application that transcribes audio files to text using a Spring Boot backend and a React frontend, powered by OpenAI's Whisper API.",
      tech: ["Java", "Spring Boot", "Spring AI", "React", "Vite", "OpenAI Whisper API"],
      color: "bg-portfolio-pink",
      link: "",
      repo: "https://github.com/introspectivepen/Audio-transcriber-java-springboot-springApi",
      pdfPath: "/pdfs/audio-transcriber.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">A full-stack web app that transcribes audio files to text using OpenAI's Whisper API.</p>
              <p className="text-white/70 mt-2">It features a secure Spring Boot backend for processing and a clean, reactive React frontend for a smooth user experience.</p>
            </>
          ),
        },
        {
          title: "Key Features",
          images: [],
          content: (
            <>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li><b>Simple File Upload:</b> A clean interface to select and upload audio files (e.g., MP3, WAV, M4A).</li>
                <li><b>Fast Transcription:</b> Leverages the power of OpenAI's Whisper model for accurate and quick transcription.</li>
                <li><b>RESTful Backend:</b> Built with Java and Spring Boot to handle file processing and API communication securely.</li>
                <li><b>Reactive Frontend:</b> A smooth and responsive user experience built with React and Vite.</li>
                <li><b>Decoupled Architecture:</b> The frontend and backend are separate, allowing for independent development and scaling.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Technology Stack",
          images: [],
          content: (
            <>
              <p className="text-white/70 mb-2">The project uses a modern, robust tech stack for both server-side and client-side development.</p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li><b>Backend:</b> Java 17, Spring Boot 3, Spring AI, Maven.</li>
                <li><b>Frontend:</b> React, Vite, CSS3.</li>
                <li><b>API Service:</b> OpenAI Whisper API.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Implementation Details",
          images: [],
          content: (
            <>
              <p className="text-white/70 mb-2">The application follows a decoupled architecture with the following pipeline:</p>
              <ul className="list-disc list-inside text-white/70">
                <li><b>Frontend:</b> Users upload audio files via a React interface built with Vite for fast development and hot module replacement.</li>
                <li><b>Backend:</b> Spring Boot handles file uploads, processes requests, and communicates with the OpenAI Whisper API using Spring AI.</li>
                <li><b>API Integration:</b> Securely manages API keys and handles transcription requests with error handling for file formats and network issues.</li>
                <li><b>Output:</b> Transcribed text is returned to the frontend and displayed in a user-friendly format.</li>
              </ul>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/audioui.png",
            
          ],
          content: (
            <>
              <p className="text-white/70">Upload audio files and view transcribed text in a clean, responsive interface.</p>
            </>
          ),
        },
        {
          title: "Challenges",
          images: [],
          content: (
            <>
              <p className="text-white/70 mb-2">Key challenges faced during development:</p>
              <ul className="list-disc list-inside text-white/70">
                <li><b>File Size and Processing:</b> Handling large audio files efficiently without overloading the server.</li>
                <li><b>API Rate Limits:</b> Managing OpenAI API rate limits and costs for transcription requests.</li>
                <li><b>Cross-Browser Compatibility:</b> Ensuring consistent file upload and display across browsers.</li>
                <li><b>Error Handling:</b> Robust handling of invalid file formats and network failures.</li>
              </ul>
              <p className="text-white/70 mt-2">Solutions included chunked file uploads, caching API responses, and extensive testing across browsers.</p>
            </>
          ),
        },
        {
          title: "Conclusion",
          images: [],
          content: (
            <>
              <p className="text-white/70">The Audio to Text Transcriber provides a reliable and user-friendly solution for transcribing audio files, leveraging modern web technologies and AI. Future enhancements could include real-time transcription and support for additional audio formats.</p>
            </>
          ),
        },
      ],
    },
    {
      title: "Object and Text Detection",
      description: "Accessibility for visually impaired users with 90% text recognition and 85% object detection accuracy, featuring text-to-speech.",
      tech: ["Python", "OpenCV", "PyTesseract", "YOLO"],
      color: "bg-portfolio-pink",
      link: "",
      repo: "https://github.com/introspectivepen/object_text_detection.git",
      pdfPath: "/pdfs/object-text-detection.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">Real-time detection using YOLOv8 and Tesseract OCR</p>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/ob1.png",
            "/images/ob2.png"
          ],
          content: (
            <>
              <p className="text-white/70">Visual outputs for object detection and text recognition.</p>
            </>
          ),
        },
        {
          title: "Implementation Details",
          images: [],
          content: (
            <>
              <p className="text-white/70">Dependencies: OpenCV, PyTesseract, Ultralytics, cvzone, pyttsx3.</p>
              <p className="text-white/70">Pipeline: Frame acquisition, skipping, object/text detection, audio output.</p>
            </>
          ),
        },
        {
          title: "Performance",
          images: [],
          content: (
            <>
              <p className="text-white/70">Optimizations: Low resolution, frame skipping, debouncing.</p>
              <p className="text-white/70">Sample: Detected 'person' in ~120-198ms per frame.</p>
            </>
          ),
        },
        {
          title: "Challenges",
          images: [],
          content: (
            <>
              <p className="text-white/70">Challenges: Poor lighting, model accuracy, resource constraints.</p>
              <p className="text-white/70">Improvements: Adaptive thresholding, multi-threading, GUI settings.</p>
            </>
          ),
        },
        {
          title: "Conclusion",
          images: [],
          content: (
            <>
              <p className="text-white/70">Effective real-time detection with cross-platform support. Future enhancements can improve robustness.</p>
            </>
          ),
        },
      ],
    },
    {
      title: "Application Info Extractor",
      description: "Web scraper for extracting and analyzing application data with 98% accuracy, reducing extraction time by 50%.",
      tech: ["Python", "Flask"],
      color: "bg-portfolio-purple",
      link: "https://application-info-extractor-3.onrender.com",
      repo: "https://github.com/introspectivepen/Application-info-extractor.git",
      pdfPath: "/pdfs/appInfo_removed.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">Web-based sentiment analysis with Flask and SerpAPI</p>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/ap1.png",
            "/images/ap2.png",
            "/images/ap3.png"
          ],
          content: (
            <>
              <p className="text-white/70">Visualizations of sentiment analysis and data extraction results.</p>
            </>
          ),
        },
        {
          title: "Key Features",
          images: [],
          content: (
            <>
              <p className="text-white/70">Features: Query handling, caching, sentiment analysis, error handling.</p>
              <p className="text-white/70">Pipeline: Input query, cache check, API call, analyze results, render output.</p>
            </>
          ),
        },
        {
          title: "Sample Output",
          images: [],
          content: (
            <>
              <p className="text-white/70">Example: 'Python programming reviews'</p>
              <ul className="list-disc list-inside text-white/70">
                <li>Good Reviews: 7, Bad Reviews: 2.</li>
                <li>Sentiment: 77.8% Good.</li>
                <li>URLs displayed as clickable links.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Challenges",
          images: [],
          content: (
            <>
              <p className="text-white/70">Challenges: Keyword-based accuracy, API dependency.</p>
              <p className="text-white/70">Improvements: NLP models (BERT), user-defined keywords, visualizations.</p>
            </>
          ),
        },
        {
          title: "Conclusion",
          images: [],
          content: (
            <>
              <p className="text-white/70">Effective sentiment analysis with caching. Future NLP enhancements can boost accuracy.</p>
            </>
          ),
        },
      ],
    },
    {
      title: "Stable Bud - AI Image Generator",
      description: "A user-friendly GUI application for generating images from text prompts using Stable Diffusion, optimized for CPU-only systems with a modern dark-themed interface.",
      tech: ["Python", "tkinter", "customtkinter", "PyTorch", "diffusers", "PIL"],
      color: "bg-portfolio-blue",
      link: "",
      repo: "https://github.com/introspectivepen/Flask-Stable-Diffusion-API-for-Low-End-CPU-.git",
      pdfPath: "/pdfs/Flask Stable Diffusion.pdf",
      slides: [
        {
          title: "Introduction",
          images: [],
          content: (
            <>
              <p className="text-lg text-white/90">GUI app for Stable Diffusion on CPU</p>
            </>
          ),
        },
        {
          title: "System Outputs",
          images: [
            "/images/st1.png",
            "/images/st2.png"
          ],
          content: (
            <>
              <p className="text-white/70">Generated images and GUI interface for Stable Diffusion.</p>
            </>
          ),
        },
        {
          title: "Model Integration",
          images: [],
          content: (
            <>
              <p className="text-white/70">Uses CompVis/stable-diffusion-v1-4 with torch.float32.</p>
              <p className="text-white/70">Config: CPU-only, safetensors disabled, auth token.</p>
            </>
          ),
        },
        {
          title: "Performance",
          images: [],
          content: (
            <>
              <p className="text-white/70">CPU-based: 1-5 min/image, 4-8 GB memory.</p>
              <p className="text-white/70">Limitations: Slow generation, hardcoded model, image overwrite.</p>
            </>
          ),
        },
        {
          title: "Improvements",
          images: [],
          content: (
            <>
              <p className="text-white/70">Add progress indicator, dynamic filenames, GPU support.</p>
              <p className="text-white/70">Enhance GUI with prompt history, model selection.</p>
            </>
          ),
        },
        {
          title: "Conclusion",
          images: [],
          content: (
            <>
              <p className="text-white/70">Accessible CPU-based image generation. Future improvements can enhance usability.</p>
            </>
          ),
        },
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    setDirection(0);
    setIsModalOpen(true);
    setPdfError(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentSlide(0);
    setDirection(0);
    setZoomedImage(null);
    setCurrentImageIndex(0);
    setPdfError(false);
  };

  const nextSlide = () => {
    if (selectedProject && currentSlide < selectedProject.slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const openZoomModal = (image: string, index: number) => {
    setZoomedImage(image);
    setCurrentImageIndex(index);
  };

  const closeZoomModal = () => {
    setZoomedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.slides[currentSlide].images.length > 0) {
      const nextIndex = (currentImageIndex + 1) % selectedProject.slides[currentSlide].images.length;
      setCurrentImageIndex(nextIndex);
      setZoomedImage(selectedProject.slides[currentSlide].images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.slides[currentSlide].images.length > 0) {
      const prevIndex = (currentImageIndex - 1 + selectedProject.slides[currentSlide].images.length) % selectedProject.slides[currentSlide].images.length;
      setCurrentImageIndex(prevIndex);
      setZoomedImage(selectedProject.slides[currentSlide].images[prevIndex]);
    }
  };

  const handleImageError = (image: string) => {
    setImageErrors(prev => ({ ...prev, [image]: true }));
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
  };

  // Animation variants for content and images
  const contentVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.35, ease: [0.4, 0, 0.6, 1] },
    }),
  };

  // Animation variants for navigation buttons
  const buttonVariants = {
    enabled: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    disabled: {
      opacity: 0.5,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Animation variants for zoom modal
  const zoomModalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  };

  // Extract file name from pdfPath for download
  const getDownloadFileName = (pdfPath: string): string => {
    return pdfPath.split('/').pop() || '';
  };

  // Zoom Modal Component using Portal
  const ZoomModal = () => {
    if (!zoomedImage) return null;

    return createPortal(
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90"
          variants={zoomModalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.button
              onClick={closeZoomModal}
              className="absolute top-4 right-4 p-2 bg-portfolio-teal/80 text-white rounded-full hover:bg-portfolio-teal transition-all duration-300"
              aria-label="Close image zoom"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} />
            </motion.button>
            {selectedProject!.slides[currentSlide].images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 p-3 bg-portfolio-teal/80 text-white rounded-full hover:bg-portfolio-teal transition-all duration-300"
                  aria-label="Previous image"
                  variants={buttonVariants}
                  animate="enabled"
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <ArrowLeft size={28} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 p-3 bg-portfolio-teal/80 text-white rounded-full hover:bg-portfolio-teal transition-all duration-300"
                  aria-label="Next image"
                  variants={buttonVariants}
                  animate="enabled"
                  whileHover="hover"
                  whileTap="tap"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <ArrowRight size={28} />
                </motion.button>
              </>
            )}
            {imageErrors[zoomedImage] ? (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <span className="text-white/70 text-lg">Image Failed to Load</span>
              </div>
            ) : (
              <img
                src={zoomedImage}
                alt="Zoomed model output"
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onError={() => handleImageError(zoomedImage)}
                loading="lazy"
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <section id="portfolio" ref={sectionRef} className="min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16 text-4xl font-bold text-white">
          MY <span className="text-portfolio-teal">PORTFOLIO</span>
        </h2>
        
        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-portfolio-black/60 border border-white/10 rounded-xl overflow-hidden hover:border-portfolio-teal/50 transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display mb-4 text-white">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${project.color}/20 text-${project.color.replace('bg-portfolio-', 'portfolio-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <span>View Demo</span>
                      <ArrowRight size={16} />
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <span>Repository</span>
                      <Github size={16} />
                    </a>
                  )}
                  {project.pdfPath && (
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <span>Details</span>
                      <FileText size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Slide Display */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="relative w-full max-w-4xl h-[95vh] bg-gradient-to-br from-portfolio-black/90 to-portfolio-blue/20 rounded-lg shadow-lg overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-portfolio-teal/80 text-white rounded-full hover:bg-portfolio-teal transition-all duration-300"
                aria-label="Close slide modal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>

              {/* Download Button */}
              {pdfError ? (
                <motion.div
                  className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-red-500/80 text-white rounded-md font-medium"
                >
                  <span>PDF Not Found</span>
                </motion.div>
              ) : (
                <motion.a
                  href={selectedProject.pdfPath}
                  download={getDownloadFileName(selectedProject.pdfPath)}
                  className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-portfolio-teal/80 text-white rounded-md hover:bg-portfolio-teal transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onError={handlePdfError}
                >
                  <Download size={20} />
                  <span>Download</span>
                </motion.a>
              )}

              {/* Slide Content */}
              <div className="h-full flex flex-col justify-center items-center p-8 overflow-y-auto">
                <AnimatePresence custom={direction}>
                  <motion.div
                    key={currentSlide}
                    className="w-full max-w-3xl bg-portfolio-black/95 rounded-lg p-8 shadow-md border border-portfolio-teal/30"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <motion.h3
                      className="text-3xl font-display font-bold text-white/90 mb-4 border-b border-portfolio-teal/50 pb-2"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}
                    >
                      {selectedProject.slides[currentSlide].title}
                    </motion.h3>
                    <motion.div
                      className="text-white/80 leading-relaxed mb-4"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                    >
                      {selectedProject.slides[currentSlide].content}
                    </motion.div>
                    {selectedProject.slides[currentSlide].images && selectedProject.slides[currentSlide].images.length > 0 && (
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        style={{ willChange: 'transform, opacity' }}
                      >
                        {selectedProject.slides[currentSlide].images.map((image, index) => (
                          <motion.div
                            key={index}
                            className="relative w-full h-48 bg-portfolio-black/50 rounded-lg overflow-hidden border border-portfolio-teal/30 hover:border-portfolio-teal cursor-pointer"
                            whileHover={{ scale: 1.03, boxShadow: '0 0 10px rgba(0, 196, 180, 0.3)' }}
                            transition={{ duration: 0.2 }}
                            onClick={() => openZoomModal(image, index)}
                          >
                            {imageErrors[image] ? (
                              <div className="w-full h-full flex items-center justify-center bg-portfolio-black/80 rounded-lg">
                                <span className="text-white/70 text-sm">Image Failed to Load</span>
                              </div>
                            ) : (
                              <img
                                src={image}
                                alt={`Model output ${index + 1} for ${selectedProject.title}`}
                                className="w-full h-full object-cover rounded-lg"
                                style={{ willChange: 'transform' }}
                                onError={() => handleImageError(image)}
                                loading="lazy"
                              />
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 bottom-8 flex justify-between px-4">
                  <motion.button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-3 rounded-full bg-portfolio-teal/80 text-white transition-all duration-300"
                    aria-label="Previous slide"
                    variants={buttonVariants}
                    animate={currentSlide === 0 ? 'disabled' : 'enabled'}
                    whileHover={currentSlide === 0 ? {} : 'hover'}
                    whileTap={currentSlide === 0 ? {} : 'tap'}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <ArrowLeft size={28} />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    disabled={currentSlide === selectedProject.slides.length - 1}
                    className="p-3 rounded-full bg-portfolio-teal/80 text-white transition-all duration-300"
                    aria-label="Next slide"
                    variants={buttonVariants}
                    animate={currentSlide === selectedProject.slides.length - 1 ? 'disabled' : 'enabled'}
                    whileHover={currentSlide === selectedProject.slides.length - 1 ? {} : 'hover'}
                    whileTap={currentSlide === selectedProject.slides.length - 1 ? {} : 'tap'}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <ArrowRight size={28} />
                  </motion.button>
                </div>

                {/* Slide Indicator */}
                <div className="absolute bottom-4 flex gap-2">
                  {selectedProject.slides.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-portfolio-teal' : 'bg-portfolio-black/50'}`}
                      animate={{ scale: index === currentSlide ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Zoom Modal via Portal */}
      <ZoomModal />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-portfolio-purple/30 blur-md"></div>
      <div className="absolute bottom-40 right-20 w-12 h-6 rounded-full bg-portfolio-teal/20 blur-md"></div>
    </section>
  );
};

export default PortfolioSection;
