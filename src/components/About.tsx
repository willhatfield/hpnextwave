import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  margin-top: 60px;
  line-height: 1.8;
  background-color: var(--background-light);
  padding: 4rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h2)`
  font-family: 'Bodoni Moda', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--accent-color);
  text-align: center;
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 1.5em;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const About = () => {
  return (
    <AboutSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About H&P NextWave
      </Title>
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        H&P NextWave is a pioneering technology company at the forefront of artificial intelligence, data analytics, and machine learning innovation. Our mission is to empower businesses of all sizes by providing scalable, user-friendly, and cost-effective AI solutions that drive efficiency, enhance decision-making, and fuel growth.
      </Paragraph>
      <Paragraph
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        With a team of dedicated AI experts, data scientists, and software engineers, we specialize in creating state-of-the-art AI-driven tools and platforms that optimize business operations, unlock valuable insights, and automate complex processes. From predictive analytics to intelligent automation, H&P NextWave enables businesses to harness the full potential of AI, transforming challenges into opportunities.
      </Paragraph>
    </AboutSection>
  );
};

export default About; 