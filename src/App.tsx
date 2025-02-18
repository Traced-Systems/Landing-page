
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactSheet from "./components/ContactSheet";
import CTAContactSheet from "./components/CTAContactSheet";

const queryClient = new QueryClient();

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCTAContactOpen, setIsCTAContactOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => {
      setIsContactOpen(true);
    };

    const handleOpenCTAContact = () => {
      setIsCTAContactOpen(true);
    };

    window.addEventListener('openContact', handleOpenContact);
    window.addEventListener('openCTAContact', handleOpenCTAContact);
    
    return () => {
      window.removeEventListener('openContact', handleOpenContact);
      window.removeEventListener('openCTAContact', handleOpenCTAContact);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ContactSheet isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <CTAContactSheet isOpen={isCTAContactOpen} onClose={() => setIsCTAContactOpen(false)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
