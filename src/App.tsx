import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactSheet from "./components/ContactSheet";
import OurPartners from "./pages/OurPartners";

// ✅ Import Google Analytics helper
import { initGA } from "./utils/analytics";

const queryClient = new QueryClient();
const MEASUREMENT_ID = "G-LV7DPTYYFV"; // Replace with your actual ID

// Initialize GA4 with your measurement ID
ReactGA.initialize("G-LV7DPTYYFV"); // Replace with your actual GA4 measurement ID

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // ✅ Initialize Google Analytics when the app starts
    initGA(MEASUREMENT_ID);

    // ✅ Add event listener for opening contact sheet
    const handleOpenContact = () => {
      setIsContactOpen(true);
    };

    window.addEventListener("openContact", handleOpenContact);
    return () => {
      window.removeEventListener("openContact", handleOpenContact);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Track page views when route changes */}
          <TrackPageView />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ContactSheet
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// ✅ Track Google Analytics page views on route changes
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", MEASUREMENT_ID, { page_path: location.pathname });
  }, [location]);

  return null;
};

export default App;
