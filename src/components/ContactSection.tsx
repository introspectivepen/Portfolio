import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init('uuTKNixL7dySlQLkW'); // Replace with your EmailJS Public Key

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_28pju4d'; // Replace with your EmailJS Service ID
    const templateID = 'template_wke2ka2'; // Replace with your EmailJS Template ID

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setStatus('Thank you for your message! It has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16">CONTACT <span className="text-portfolio-teal">WITH ME</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">Get In Touch</h3>
            <p className="text-white/70 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-teal/20 flex items-center justify-center text-portfolio-teal">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <a href="mailto:saminathan9102003@gmail.com" className="hover:text-portfolio-teal transition-colors">
                    saminathan9102003@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-pink/20 flex items-center justify-center text-portfolio-pink">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50">Phone</div>
                  <a href="tel:8668058971" className="hover:text-portfolio-pink transition-colors">
                    +91 8668058971
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-blue/20 flex items-center justify-center text-portfolio-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50">Location</div>
                  <span>Chengalpattu, Tamil Nadu, India</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50">LinkedIn</div>
                  <a href="https://linkedin.com/in/saminathan910" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-purple transition-colors">
                    www.linkedin.com/in/saminathan910
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50">GitHub</div>
                  <a
                    href="https://github.com/introspectivepen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors">
                    github.com/introspectivepen
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6">Send Message</h3>
            {status && (
              <div className={`mb-4 p-4 rounded-md ${status.includes('Thank you') ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-portfolio-teal"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-portfolio-teal"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-portfolio-teal resize-none"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="bg-portfolio-teal text-portfolio-black font-semibold py-3 px-6 rounded hover:bg-portfolio-teal/80 transition-all w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-10 h-10 rounded-full bg-portfolio-blue/20 blur-md"></div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 rounded-full bg-portfolio-pink/30 blur-md"></div>
    </section>
  );
};

export default ContactSection;