import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes,css } from 'styled-components';
import { AuthContext } from '../context/AuthContext';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-20px); }
  to { transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-50px); }
  to { transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const underline = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

// Styled Components
const NavContainer = styled.nav`
  background: ${props => props.mode === 'dark' 
    ? 'linear-gradient(135deg, rgba(26,43,72,0.95), rgba(26,26,46,0.95))' 
    : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.95))'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: ${props => props.mode === 'dark' 
    ? '1px solid rgba(255,255,255,0.1)' 
    : '1px solid rgba(0,0,0,0.1)'};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0.5rem 1rem;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-out, ${slideDown} 0.5s ease-out;
`;

const Brand = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: ${props => props.mode === 'dark' 
    ? 'linear-gradient(to right, #4facfe, #00f2fe)' 
    : 'linear-gradient(to right, #667eea, #764ba2)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  animation: ${slideIn} 0.5s ease-out 0.2s both;
`;

const ToggleButton = styled.button`
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(90deg);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  color: ${props => props.mode === 'light' ? '#212529' : '#f8f9fa'};
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    color: ${props => props.mode === 'dark' ? '#4facfe' : '#667eea'};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.mode === 'dark' ? '#4facfe' : '#667eea'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    animation: ${underline} 0.3s ease;
  }
`;

const ToggleSwitch = styled.input`
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  background-color: ${props => props.mode === 'dark' ? '#4facfe' : '#667eea'} !important;
  border-color: ${props => props.mode === 'dark' ? '#4facfe' : '#667eea'} !important;
  
  &:active {
    transform: scale(0.9);
  }
`;

const ToggleLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.mode === 'light' ? '#212529' : '#f8f9fa'};
  margin-left: 0.5rem;
`;

const LogoutButton = styled.button`
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-width: 2px;
  transition: all 0.3s ease;
  background: transparent;
  color: ${props => props.mode === 'light' ? '#dc3545' : '#ffc107'};
  border-color: ${props => props.mode === 'light' ? '#dc3545' : '#ffc107'};
  animation: ${fadeIn} 0.5s ease-out 0.6s both;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.mode === 'light' 
      ? '0 0 15px rgba(220, 53, 69, 0.4)' 
      : '0 0 15px rgba(255, 193, 7, 0.4)'};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CollapseWrapper = styled.div`
  animation: ${css`${fadeIn}`} 0.5s ease-out 0.4s both;
`;


export default function Navbar(props) {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <NavContainer 
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      mode={props.mode}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <Brand 
          className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`}
          mode={props.mode}
        >
          {props.title}
        </Brand>

        {/* Mobile Toggle Button */}
        <ToggleButton
          className={`navbar-toggler ${props.mode === 'dark' ? 'navbar-dark' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </ToggleButton>

        {/* Collapsible Menu */}
        <CollapseWrapper 
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink 
                className="nav-link position-relative"
                to="/home"
                mode={props.mode}
              >
                Home
              </NavLink>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <NavLink 
                className="nav-link position-relative"
                to="/about"
                mode={props.mode}
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Right Side Controls */}
          <div className="d-flex align-items-center gap-4">
            {/* Dark Mode Toggle */}
            <div className="d-flex align-items-center">
              <div className="form-check form-switch">
                <ToggleSwitch
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                  mode={props.mode}
                />
                <ToggleLabel
                  className="form-check-label ms-2"
                  htmlFor="flexSwitchCheckDefault"
                  mode={props.mode}
                >
                  {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </ToggleLabel>
              </div>
            </div>

            {/* Logout Button */}
            {isAuthenticated && (
              <LogoutButton
                className="btn btn-sm"
                onClick={handleLogout}
                mode={props.mode}
              >
                Logout
              </LogoutButton>
            )}
          </div>
        </CollapseWrapper>
      </div>
    </NavContainer>
  );
}