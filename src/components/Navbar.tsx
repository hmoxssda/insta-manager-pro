
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LangToggle from './LangToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-4 sticky top-0 z-30 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">{t('app.name')}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/subscription" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link to="/support" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            {t('nav.support')}
          </Link>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <LangToggle />
            <Button variant="outline" asChild>
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
            <Button asChild>
              <Link to="/register">{t('nav.signup')}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-950 z-20 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/subscription" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to="/support" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.support')}
            </Link>
            
            <div className="pt-4 border-t">
              <LangToggle />
              <div className="mt-4 flex flex-col space-y-2">
                <Button variant="outline" asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link to="/register">{t('nav.signup')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
