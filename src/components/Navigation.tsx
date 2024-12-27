import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Courses', path: '#courses' },
    { name: 'About', path: '#about' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Curriculum', path: '#curriculum' },
    { name: 'Pricing', path: '#pricing' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-primary">
            TechBootcamp
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-textColor hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#apply"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block py-2 text-textColor hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#apply"
              className="block py-2 text-primary hover:text-primary-hover transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;