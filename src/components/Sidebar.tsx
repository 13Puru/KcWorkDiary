import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Edit3, 
  User, 
  Shield, 
  GraduationCap,
  LogOut 
} from 'lucide-react';
import { DashboardView } from '../types';

interface SidebarProps {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
  onLogout: () => void;
  userName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onLogout, userName }) => {
  const menuItems = [
    { id: 'dashboard' as DashboardView, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'add-diary' as DashboardView, label: 'Add Diary', icon: PlusCircle },
    { id: 'edit-diary' as DashboardView, label: 'Edit Diary', icon: Edit3 },
    { id: 'profile' as DashboardView, label: 'View Profile', icon: User },
    { id: 'verification' as DashboardView, label: 'Request Verification', icon: Shield },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 px-4 mb-8">
          <div className="bg-college-blue p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-semibold text-college-navy">KC Work Diary</h2>
            <p className="text-xs text-college-gray">Karimganj College</p>
          </div>
        </div>

        {/* User Info */}
        <div className="px-4 mb-6">
          <div className="bg-college-light p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-college-blue p-2 rounded-full">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-college-navy">{userName}</p>
                <p className="text-xs text-college-gray">Faculty Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors duration-200 ${
                activeView === item.id
                  ? 'bg-college-blue text-white'
                  : 'text-college-gray hover:bg-gray-100 hover:text-college-navy'
              }`}
            >
              <item.icon
                className={`mr-3 flex-shrink-0 h-5 w-5 ${
                  activeView === item.id ? 'text-white' : 'text-college-gray group-hover:text-college-navy'
                }`}
              />
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="px-2 mt-6">
          <motion.button
            onClick={onLogout}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
          >
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5" />
            Logout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;