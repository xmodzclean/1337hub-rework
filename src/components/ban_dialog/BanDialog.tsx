import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

interface BanDialogProps {
  isOpen: boolean;
  reason: string;
  onClose: () => void;
}

const BanDialog: React.FC<BanDialogProps> = ({ isOpen, reason, onClose }) => {
  if (!isOpen) return null;

  return (
    <DialogOverlay>
      <DialogContainer>
        <DialogHeader>
          <FaExclamationTriangle size={24} color="#ff4444" />
          <h2>Account Suspended</h2>
          <CloseButton onClick={onClose}>
            <FaTimes size={18} />
          </CloseButton>
        </DialogHeader>
        
        <DialogContent>
          <p className="ban-message">
            Your account has been suspended by an administrator.
          </p>
          
          <div className="reason-section">
            <h3>Reason for suspension:</h3>
            <div className="reason-box">
              {reason}
            </div>
          </div>
          
          <p className="contact-info">
            If you believe this is a mistake, please contact the administrators for further assistance.
          </p>
        </DialogContent>
        
        <DialogFooter>
          <ActionButton onClick={onClose}>
            I Understand
          </ActionButton>
        </DialogFooter>
      </DialogContainer>
    </DialogOverlay>
  );
};

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DialogContainer = styled.div`
  background: linear-gradient(135deg, #2a2a2e, #1a1a1d);
  border: 2px solid #ff4444;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 40px rgba(255, 68, 68, 0.3);
  animation: slideIn 0.3s ease-out;
  overflow: hidden;

  @keyframes slideIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 20px;
  }
`;

const DialogHeader = styled.div`
  background: linear-gradient(135deg, #ff4444, #cc3333);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    flex: 1;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const DialogContent = styled.div`
  padding: 24px;
  color: #e0e0e0;

  .ban-message {
    font-size: 1.1rem;
    margin-bottom: 20px;
    text-align: center;
    color: #ffffff;
  }

  .reason-section {
    margin: 20px 0;

    h3 {
      color: #ff6666;
      font-size: 1rem;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }

  .reason-box {
    background: rgba(255, 68, 68, 0.1);
    border: 1px solid rgba(255, 68, 68, 0.3);
    border-radius: 8px;
    padding: 16px;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    word-wrap: break-word;
    color: #ffcccc;
  }

  .contact-info {
    font-size: 0.9rem;
    color: #b0b0b0;
    text-align: center;
    margin-top: 20px;
    font-style: italic;
  }
`;

const DialogFooter = styled.div`
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 68, 68, 0.2);
  display: flex;
  justify-content: center;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #ff4444, #cc3333);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #cc3333, #aa2222);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 68, 68, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default BanDialog;
