import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(183, 251, 43, 0.3);
  border-top: 3px solid var(--main_color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Logo = styled.div`
  font-family: var(--playable_font);
  font-size: 2rem;
  font-weight: bold;
  color: var(--main_color);
  margin-bottom: 2rem;
  text-shadow: 0 0 20px rgba(183, 251, 43, 0.5);
`;

interface PageLoaderProps {
  message?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading your personalized experience..." 
}) => {
  return (
    <LoaderContainer>
      <Logo>13BG</Logo>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoaderContainer>
  );
};

export default PageLoader;
