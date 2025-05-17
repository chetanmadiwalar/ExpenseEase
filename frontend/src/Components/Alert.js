import React from 'react';
import styled from 'styled-components';

export default function Alert(props) {
  // Function to capitalize the first letter of a word
  function capitalize(word) {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <AlertWrapper>
      {props.alert && (
        <AlertContainer type={props.alert.type} className="slide-down">
           {props.alert.msg}
        </AlertContainer>
      )}
    </AlertWrapper>
  );
}

// Styled Components
const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 1000;
  pointer-events: none; // Prevent clicks on the alert
`;

const AlertContainer = styled.div`
  background-color: ${(props) =>
    props.type === 'success'
      ? '#d4edda'
      : props.type === 'danger'
      ? '#f8d7da'
      : props.type === 'warning'
      ? '#fff3cd'
      : '#d1ecf1'};
  color: ${(props) =>
    props.type === 'success'
      ? '#155724'
      : props.type === 'danger'
      ? '#721c24'
      : props.type === 'warning'
      ? '#856404'
      : '#0c5460'};
  border: 1px solid ${(props) =>
    props.type === 'success'
      ? '#c3e6cb'
      : props.type === 'danger'
      ? '#f5c6cb'
      : props.type === 'warning'
      ? '#ffeeba'
      : '#bee5eb'};
  padding: 15px;
  border-radius: 5px;
  width: 60%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  pointer-events: auto;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideDown 0.5s ease-out;
`;

