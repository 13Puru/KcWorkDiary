import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalType } from '../types';

interface NavbarProps {
  activeModal: ModalType;
  setActiveModal: (modal: ModalType) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeModal, setActiveModal, isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Developer', href: '#developer' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-college-blue p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-college-navy">Karimganj College</h1>
              <p className="text-xs text-college-gray">Work Diary System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-college-gray hover:text-college-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {!isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveModal('login')}
                  className="text-college-blue hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveModal('register')}
                  className="btn-primary"
                >
                  Register
                </button>
              </div>
            ) : (
              <button
                onClick={onLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-college-gray hover:text-college-blue hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-college-gray hover:text-college-blue transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {!isLoggedIn ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setActiveModal('login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-secondary text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setActiveModal('register');
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-primary"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-secondary w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;