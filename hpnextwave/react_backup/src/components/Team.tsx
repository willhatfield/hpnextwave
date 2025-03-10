import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TeamSection = styled.section`
  margin-top: 60px;
  line-height: 1.8;
  text-align: center;
  background-color: var(--background-light);
  padding: 4rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h2)`
  font-family: 'Bodoni Moda', serif;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent-color);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamMember = styled(motion.div)`
  background-color: var(--background-dark);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid var(--accent-color);
  object-fit: cover;
`;

const MemberName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const MemberTitle = styled.p`
  font-size: 1.1rem;
  color: var(--accent-color);
`;

const Team = () => {
  const teamMembers = [
    {
      name: 'William Hatfield',
      title: 'Founder & CEO',
      image: '/assets/WillHatfieldPhoto.png'
    },
    {
      name: 'Blake Palm',
      title: 'Head of Business Operations',
      image: '/assets/BlakePalm2.png'
    },
    {
      name: 'Robert Alexander',
      title: 'Intern',
      image: '/assets/team-member3.jpg'
    }
  ];

  return (
    <TeamSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            whileHover={{ scale: 1.02 }}
          >
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberTitle>{member.title}</MemberTitle>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default Team; 