import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

const MainContent = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const HomePage = () => {
  return (
    <>
      <Hero />
      <MainContent>
        <About />
        <Services />
        <Team />
      </MainContent>
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
