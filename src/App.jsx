import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import { useEffect } from 'react';

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage.jsx";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage.jsx";
import DesignPage from "./components/DesignPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    };

    setVH()
    window.addEventListener('resize', setVH);

    return () => window.removeEventListener('resize', setVH);
  }, []);
  
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

       
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location} >
            

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/design" element={<DesignPage />} />

            <Route path="/skills" element={<MySkillsPage />} />
            
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
