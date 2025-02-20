
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactSheet from "./components/ContactSheet";

const queryClient = new QueryClient();

// Initialize GA4 with your measurement ID
ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your actual GA4 measurement ID

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => {
      setIsContactOpen(true);
    };

    window.addEventListener('openContact', handleOpenContact);
    return () => {
      window.removeEventListener('openContact', handleOpenContact);
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
