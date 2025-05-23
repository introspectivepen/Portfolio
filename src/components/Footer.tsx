
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-portfolio-black font-bold">SM</div>
            <span className="font-display font-bold">SAMINATHAN</span>
          </div>
          
          <div className="text-white/50 text-sm">
            © {currentYear} Saminathan M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
