import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: var(--background-light);
  color: var(--text-primary);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  font-family: 'Bodoni Moda', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
`;

const Nav = styled.nav`
  a {
    color: var(--text-primary);
    text-decoration: none;
    margin: 0 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--accent-color);
      transition: width 0.2s ease;
    }
    
    &:hover {
      color: var(--accent-color);
      
      &:after {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Brand>H&P NextWave</Brand>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 