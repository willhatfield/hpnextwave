import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/assets/32993994_840843081452.png');
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-primary);
  padding: 100px 20px;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-family: 'Bodoni Moda', serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Empowering AI Innovations
      </Title>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Transforming businesses with cutting-edge technology, 
        data-driven insights, and the limitless potential of artificial intelligence.
      </Description>
      <CTAButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </CTAButton>
    </HeroSection>
  );
};

export default Hero; 