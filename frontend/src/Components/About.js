import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutContainer = styled.div`
  margin: 3rem 2rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${(props) => (props.mode === 'dark' ? '#001739' : 'rgb(222 222 163)')};
  color: ${(props) => (props.mode === 'dark' ? 'white' : 'black')};
  box-shadow: ${(props) =>
    props.mode === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.7)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: ${(props) => (props.mode === 'light' ? '#333' : '#ffc107')};
  text-align: center;
  margin-bottom: 1rem;
`;

const Paragraph = styled(motion.p)`
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: justify;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled(motion.li)`
  font-size: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  &::before {
    content: '✔';
    color: ${(props) => (props.mode === 'dark' ? '#ffc107' : '#007bff')};
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

// About Component
export default function About(props) {
  return (
    <AboutContainer mode={props.mode}>
      <Title
        mode={props.mode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </Title>
      <Paragraph
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Expense Tracker! Our goal is to help you manage your finances easily and
        effectively. With our user-friendly app, you can track your expenses and incomes, and stay on top of your financial goals.
      </Paragraph>
      <Paragraph
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <strong>Key Features:</strong>
      </Paragraph>
      <FeatureList>
        <FeatureItem
          mode={props.mode}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Easy to Use: Simple and intuitive interface.
        </FeatureItem>
        <FeatureItem
          mode={props.mode}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Detailed Reports: Analyze your spending and saving habits.
        </FeatureItem>
        <FeatureItem
          mode={props.mode}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Custom Categories: Organize your finances your way.
        </FeatureItem>
        <FeatureItem
          mode={props.mode}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Real-Time Tracking: Keep your finances up-to-date.
        </FeatureItem>
        <FeatureItem
          mode={props.mode}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Secure: Your data is safe with us.
        </FeatureItem>
      </FeatureList>
      <Paragraph
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <strong>Our Mission:</strong>
      </Paragraph>
      <Paragraph
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        We aim to make financial management accessible and stress-free for everyone. Join us and
        take control of your finances today!
      </Paragraph>
    </AboutContainer>
  );
}
