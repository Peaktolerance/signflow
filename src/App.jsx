import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import DashboardSection from './components/DashboardSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import NotificationToast from './components/NotificationToast';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleTriggerToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          onOpenDemoModal={handleOpenDemoModal} 
          onActionToast={handleTriggerToast} 
        />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section (Create -> Schedule -> Display) */}
        <SolutionSection onActionToast={handleTriggerToast} />

        {/* Features Section */}
        <FeaturesSection onActionToast={handleTriggerToast} />

        {/* How It Works Section */}
        <HowItWorksSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Dashboard Prototype Section */}
        <DashboardSection onActionToast={handleTriggerToast} />

        {/* Target Customers Section */}
        <TargetAudienceSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Call to Action Section */}
        <CtaSection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Footer */}
      <Footer onActionToast={handleTriggerToast} />

      {/* Interactive Booking Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemoModal}
        onSuccessToast={handleTriggerToast}
      />

      {/* Floating Action Toast Notification */}
      <NotificationToast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />
    </div>
  );
}
