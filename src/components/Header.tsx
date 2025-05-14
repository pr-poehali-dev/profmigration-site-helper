
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Icon name="LocateFixed" className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-montserrat font-bold text-gray-900">
                <span className="text-primary">Проф</span>Миграция
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors">
              Процесс
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </a>
            <Button>Получить консультацию</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <a 
              href="#services" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#advantages" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#process" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Процесс
            </a>
            <a 
              href="#contacts" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="w-full">Получить консультацию</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
