import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
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

const Description = styled(motion.p)`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled(motion.ol)`
  margin-left: 20px;
  font-size: 1.1rem;
  margin-bottom: 1.5em;
  color: var(--text-secondary);
`;

const SubList = styled.ul`
  margin-left: 20px;
  margin-bottom: 1.5em;
  list-style-type: disc;
  color: var(--text-secondary);
`;

const ListItem = styled.li`
  margin-bottom: 1em;
  line-height: 1.6;

  strong {
    color: var(--accent-color);
    font-size: 1.2rem;
  }

  em {
    color: var(--text-primary);
  }
`;

const Services = () => {
  return (
    <ServicesSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Key Services &amp; Offerings
      </Title>
      <Description
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        H&P NextWave provides a comprehensive suite of AI-powered solutions tailored to meet the diverse needs of businesses across various industries. Our services include:
      </Description>
      <List
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ListItem>
          <strong>AI-Powered Data Analytics</strong>
          <SubList>
            <ListItem><em>Predictive Analytics:</em> Anticipate trends, customer behavior, and market fluctuations to make data-driven decisions.</ListItem>
            <ListItem><em>Big Data Processing:</em> Handle massive datasets with ease, extracting actionable insights from structured and unstructured data.</ListItem>
            <ListItem><em>Real-Time Data Analysis:</em> Monitor and analyze live data streams to improve operations and responsiveness.</ListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <strong>Intelligent Process Automation (IPA)</strong>
          <SubList>
            <ListItem><em>Robotic Process Automation (RPA):</em> Automate repetitive tasks, freeing up valuable human resources for higher-level work.</ListItem>
            <ListItem><em>Workflow Optimization:</em> Improve operational efficiency by streamlining and automating key business processes.</ListItem>
            <ListItem><em>AI-Powered Chatbots:</em> Enhance customer service and engagement with AI-driven virtual assistants.</ListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <strong>Industry-Specific AI Solutions</strong>
          <Description>
            We provide industry-focused AI innovations designed to solve unique challenges across various sectors:
          </Description>
          <SubList>
            <ListItem>Marketing &amp; Customer Engagement: AI-driven ad targeting, chatbots, and customer sentiment analysis.</ListItem>
          </SubList>
        </ListItem>
      </List>
    </ServicesSection>
  );
};

export default Services; 