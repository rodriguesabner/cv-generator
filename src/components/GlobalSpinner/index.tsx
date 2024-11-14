// src/components/GlobalSpinner/index.tsx
import styled, { keyframes } from 'styled-components';
import { Loader } from 'lucide-react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const SpinnerIcon = styled(Loader)`
  animation: ${spin} 1s linear infinite;
  color: white;
  width: 50px;
  height: 50px;
`;

export default function GlobalSpinner() {
  return (
    <SpinnerWrapper>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
}
