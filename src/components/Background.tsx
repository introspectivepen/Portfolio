
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black via-[#161616] to-portfolio-black"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-portfolio-teal/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full bg-portfolio-pink/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-portfolio-purple/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

export default Background;
