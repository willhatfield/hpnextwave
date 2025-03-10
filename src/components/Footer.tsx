import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: var(--background-light);
  color: var(--text-secondary);
  padding: 4rem 2rem;
  font-size: 1rem;
  text-align: center;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--accent-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: 'Bodoni Moda', serif;
  }
`;

const FooterText = styled.p`
  margin-bottom: 0.8rem;
  line-height: 1.6;
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>H&P NextWave</h3>
          <FooterText>
            Empowering businesses with cutting-edge AI solutions.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <FooterText>
            <FooterLink href="mailto:hpnextwave@gmail.com">
              hpnextwave@gmail.com
            </FooterLink>
          </FooterText>
        </FooterSection>
        <FooterSection>
          <h3>Connect</h3>
          <SocialLinks>
            <FooterLink 
              href="https://twitter.com/hpnextwave" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Twitter
            </FooterLink>
            <FooterLink 
              href="https://linkedin.com/company/hpnextwave" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </FooterLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h3>Legal</h3>
          <FooterText>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </FooterText>
          <FooterText>&copy; 2025 H&P NextWave. All Rights Reserved.</FooterText>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 