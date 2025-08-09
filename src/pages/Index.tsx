import Navigation from '@/components/Navigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div 
          ref={heroRef}
          className={`text-center px-4 transition-all duration-1000 ease-out ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-kaushan">
            Responsive Design
          </h1>
          <button 
            onClick={handleScrollToAbout}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:text-cyan-400 transition-colors duration-200 font-medium cursor-pointer"
          >
            Scroll and See
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-nav-solid text-nav-text">
        <div 
          ref={aboutRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            aboutVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-nav-text">About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black group">
              <h3 className="text-xl font-semibold mb-4 text-nav-text group-hover:text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nav-text-hover after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">Scroll Detection</h3>
              <p className="text-nav-text group-hover:text-black">Automatically detects scroll position and applies smooth transitions.</p>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black group">
              <h3 className="text-xl font-semibold mb-4 text-nav-text group-hover:text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nav-text-hover after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">Mobile Responsive</h3>
              <p className="text-nav-text group-hover:text-black">Includes a hamburger menu for seamless mobile navigation.</p>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black group">
              <h3 className="text-xl font-semibold mb-4 text-nav-text group-hover:text-black relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nav-text-hover after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">Modern Design</h3>
              <p className="text-nav-text group-hover:text-black">Clean aesthetics with hover effects and smooth animations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        <div 
          ref={contactRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${
            contactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-black cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-white">eishchandeal51@gmail.com</p>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-black cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-white">+91 123-456-7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">Scroll back to the top to see the navigation return to transparent!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
