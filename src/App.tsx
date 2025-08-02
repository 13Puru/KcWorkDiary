import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import MobileBottomNav from './components/MobileBottomNav';
import AddDiary from './components/AddDiary';
import Profile from './components/Profile';
import { ModalType, DashboardView } from './types';

const AppContent: React.FC = () => {
  const { user, login, register, logout, isLoading } = useAuth();
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');

  const handleCloseModal = () => setActiveModal(null);

  const renderDashboardContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'add-diary':
        return <AddDiary />;
      case 'edit-diary':
        return <div className="text-center py-12 text-college-gray">Edit Diary feature coming soon...</div>;
      case 'profile':
        return <Profile />;
      case 'verification':
        return <div className="text-center py-12 text-college-gray">Verification request feature coming soon...</div>;
      default:
        return <Dashboard />;
    }
  };

  if (user) {
    return (
      <div className="min-h-screen bg-college-light">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
          onLogout={logout}
          userName={user.name}
        />
        <div className="lg:pl-64">
          <main className="p-4 lg:p-8 pb-20 lg:pb-8">
            {renderDashboardContent()}
          </main>
        </div>
        <MobileBottomNav activeView={activeView} setActiveView={setActiveView} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        activeModal={activeModal} 
        setActiveModal={setActiveModal}
        isLoggedIn={!!user}
        onLogout={logout}
      />
      <WelcomePage />
      
      <AnimatePresence>
        {activeModal === 'login' && (
          <LoginModal
            isOpen={true}
            onClose={handleCloseModal}
            onLogin={login}
            setActiveModal={setActiveModal}
            isLoading={isLoading}
          />
        )}
        {activeModal === 'register' && (
          <RegisterModal
            isOpen={true}
            onClose={handleCloseModal}
            onRegister={register}
            setActiveModal={setActiveModal}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;