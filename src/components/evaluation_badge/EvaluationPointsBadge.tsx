import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCoins, FaGraduationCap, FaStar, FaFire } from 'react-icons/fa';

interface EvaluationBadgeProps {
  evaluationPoints: number;
  walletAmount?: number;
  size?: 'small' | 'medium' | 'large';
  showWallet?: boolean;
}

const shine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const StyledBadgeContainer = styled.div<{ $size: string }>`
  display: flex;
  gap: 4px;
  align-items: center;
  
  ${props => props.$size === 'small' && `
    .eval-badge, .wallet-badge { 
      padding: 4px 8px; 
      font-size: 0.7rem;
      border-radius: 6px;
    }
    .badge-icon { font-size: 0.8rem; }
  `}
  
  ${props => props.$size === 'medium' && `
    .eval-badge, .wallet-badge { 
      padding: 6px 10px; 
      font-size: 0.8rem;
      border-radius: 8px;
    }
    .badge-icon { font-size: 1rem; }
  `}
  
  ${props => props.$size === 'large' && `
    .eval-badge, .wallet-badge { 
      padding: 8px 12px; 
      font-size: 0.9rem;
      border-radius: 10px;
    }
    .badge-icon { font-size: 1.1rem; }
  `}
`;

const EvaluationBadge = styled.div<{ $points: number }>`
  background: ${props => {
    if (props.$points >= 15) return 'linear-gradient(135deg, #FFD700, #FFA500)';
    if (props.$points >= 10) return 'linear-gradient(135deg, #4CAF50, #45a049)';
    if (props.$points >= 5) return 'linear-gradient(135deg, #2196F3, #1976D2)';
    return 'linear-gradient(135deg, #9E9E9E, #757575)';
  }};
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  ${props => props.$points >= 15 && `
    animation: ${pulse} 2s infinite;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      animation: ${shine} 3s infinite;
    }
  `}
  
  .badge-icon {
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.3));
  }
`;

const WalletBadge = styled.div<{ $amount: number }>`
  background: ${props => {
    if (props.$amount >= 1000) return 'linear-gradient(135deg, #FF6B35, #F7931E)';
    if (props.$amount >= 500) return 'linear-gradient(135deg, #8E44AD, #9B59B6)';
    if (props.$amount >= 100) return 'linear-gradient(135deg, #3498DB, #5DADE2)';
    return 'linear-gradient(135deg, #95A5A6, #BDC3C7)';
  }};
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  .badge-icon {
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.3));
    animation: ${props => props.$amount >= 1000 ? `${pulse} 2s infinite` : 'none'};
  }
`;

const EvaluationPointsBadge: React.FC<EvaluationBadgeProps> = ({
  evaluationPoints,
  walletAmount,
  size = 'medium',
  showWallet = true
}) => {
  const getEvaluationIcon = (points: number) => {
    if (points >= 15) return <FaFire className="badge-icon" />;
    if (points >= 10) return <FaStar className="badge-icon" />;
    return <FaGraduationCap className="badge-icon" />;
  };

  return (
    <StyledBadgeContainer $size={size}>
      <EvaluationBadge $points={evaluationPoints} className="eval-badge">
        {getEvaluationIcon(evaluationPoints)}
        {evaluationPoints}
      </EvaluationBadge>
      
      {showWallet && walletAmount !== undefined && (
        <WalletBadge $amount={walletAmount} className="wallet-badge">
          <FaCoins className="badge-icon" />
          {walletAmount}₳
        </WalletBadge>
      )}
    </StyledBadgeContainer>
  );
};

export default EvaluationPointsBadge;
