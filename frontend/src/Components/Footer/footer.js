import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const FooterContainer = styled.footer`
  background-color: ${(props) => (props.mode === 'dark' ? '#001739' : '#f8f9fa')};
  color: ${(props) => (props.mode === 'dark' ? '#ffffff' : '#343a40')};
  padding: 2rem 1rem;
  text-align: center;
  font-size: 1rem;
  box-shadow: ${(props) =>
    props.mode === 'dark'
      ? '0 -4px 8px rgba(255, 255, 255, 0.05)'
      : '0 -4px 8px rgba(0, 0, 0, 0.08)'};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
  }
`;

const FooterText = styled(motion.div)`
  font-weight: 500;
  letter-spacing: 0.4px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => (props.mode === 'dark' ? '#ffc107' : '#007bff')};
    transform: scale(1.05);
  }
`;

const SubText = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

// Footer Component
export default function Footer({ mode }) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer mode={mode}>
      <FooterText
        mode={mode}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        Designed and Developed with by <strong>Chetan H M</strong>
      </FooterText>
      <SubText>&copy; {currentYear} Chetan H M. All rights reserved.</SubText>
    </FooterContainer>
  );
}
