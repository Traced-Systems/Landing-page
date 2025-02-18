import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import UseCases from './pages/UseCases';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import OurVision from './pages/OurVision';
import OurValues from './pages/OurValues';
import OurPeople from './pages/OurPeople';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactSheet from './components/ContactSheet';
import IndustriesSheet from './components/IndustriesSheet';
import OurVisionSheet from './components/OurVisionSheet';
import OurValuesSheet from './components/OurValuesSheet';
import OurPeopleSheet from './components/OurPeopleSheet';
import BlogSheet from './components/BlogSheet';

function App() {
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [isIndustriesSheetOpen, setIsIndustriesSheetOpen] = useState(false);
  const [isOurVisionSheetOpen, setIsOurVisionSheetOpen] = useState(false);
  const [isOurValuesSheetOpen, setIsOurValuesSheetOpen] = useState(false);
  const [isOurPeopleSheetOpen, setIsOurPeopleSheetOpen] = useState(false);
  const [isBlogSheetOpen, setIsBlogSheetOpen] = useState(false);
  const [contactSheetOpen, setContactSheetOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => {
      setContactSheetOpen(true);
    };

    window.addEventListener('openContact', handleOpenContact);
    return () => {
      window.removeEventListener('openContact', handleOpenContact);
    };
  }, []);

  return (
    <Router>
      <AppContent
        isContactSheetOpen={isContactSheetOpen}
        setIsContactSheetOpen={setIsContactSheetOpen}
        isIndustriesSheetOpen={isIndustriesSheetOpen}
        setIsIndustriesSheetOpen={setIsIndustriesSheetOpen}
        isOurVisionSheetOpen={isOurVisionSheetOpen}
        setIsOurVisionSheetOpen={setIsOurVisionSheetOpen}
        isOurValuesSheetOpen={isOurValuesSheetOpen}
        setIsOurValuesSheetOpen={setIsOurValuesSheetOpen}
        isOurPeopleSheetOpen={isOurPeopleSheetOpen}
        setIsOurPeopleSheetOpen={setIsOurPeopleSheetOpen}
        isBlogSheetOpen={isBlogSheetOpen}
        setIsBlogSheetOpen={setIsBlogSheetOpen}
      />
      <ContactSheet isOpen={contactSheetOpen} onClose={() => setContactSheetOpen(false)} />
    </Router>
  );
}

function AppContent({
  isContactSheetOpen,
  setIsContactSheetOpen,
  isIndustriesSheetOpen,
  setIsIndustriesSheetOpen,
  isOurVisionSheetOpen,
  setIsOurVisionSheetOpen,
  isOurValuesSheetOpen,
  setIsOurValuesSheetOpen,
  isOurPeopleSheetOpen,
  setIsOurPeopleSheetOpen,
  isBlogSheetOpen,
  setIsBlogSheetOpen,
}: {
  isContactSheetOpen: boolean;
  setIsContactSheetOpen: (open: boolean) => void;
  isIndustriesSheetOpen: boolean;
  setIsIndustriesSheetOpen: (open: boolean) => void;
  isOurVisionSheetOpen: boolean;
  setIsOurVisionSheetOpen: (open: boolean) => void;
  isOurValuesSheetOpen: boolean;
  setIsOurValuesSheetOpen: (open: boolean) => void;
  isOurPeopleSheetOpen: boolean;
  setIsOurPeopleSheetOpen: (open: boolean) => void;
  isBlogSheetOpen: boolean;
  setIsBlogSheetOpen: (open: boolean) => void;
}) {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-59L1329J53');
    ReactGA.send({ hitType: 'page_view', page: location.pathname });
  }, [location]);

  return (
    <>
      <Navbar
        onContactClick={() => setIsContactSheetOpen(true)}
        onIndustriesClick={() => setIsIndustriesSheetOpen(true)}
        onOurVisionClick={() => setIsOurVisionSheetOpen(true)}
        onOurValuesClick={() => setIsOurValuesSheetOpen(true)}
        onOurPeopleClick={() => setIsOurPeopleSheetOpen(true)}
        onBlogClick={() => setIsBlogSheetOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/our-values" element={<OurValues />} />
        <Route path="/our-people" element={<OurPeople />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />

      <IndustriesSheet
        isOpen={isIndustriesSheetOpen}
        onClose={() => setIsIndustriesSheetOpen(false)}
      />
      <OurVisionSheet
        isOpen={isOurVisionSheetOpen}
        onClose={() => setIsOurVisionSheetOpen(false)}
      />
      <OurValuesSheet
        isOpen={isOurValuesSheetOpen}
        onClose={() => setIsOurValuesSheetOpen(false)}
      />
      <OurPeopleSheet
        isOpen={isOurPeopleSheetOpen}
        onClose={() => setIsOurPeopleSheetOpen(false)}
      />
      <BlogSheet
        isOpen={isBlogSheetOpen}
        onClose={() => setIsBlogSheetOpen(false)}
      />
    </>
  );
}

export default App;
