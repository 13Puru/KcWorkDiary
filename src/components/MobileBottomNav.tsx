import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Edit3, 
  User, 
  Shield 
} from 'lucide-react';
import { DashboardView } from '../types';

interface MobileBottomNavProps {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'dashboard' as DashboardView, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'add-diary' as DashboardView, label: 'Add', icon: PlusCircle },
    { id: 'edit-diary' as DashboardView, label: 'Edit', icon: Edit3 },
    { id: 'profile' as DashboardView, label: 'Profile', icon: User },
    { id: 'verification' as DashboardView, label: 'Verify', icon: Shield },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
              activeView === item.id
                ? 'text-college-blue bg-blue-50'
                : 'text-college-gray hover:text-college-navy'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;