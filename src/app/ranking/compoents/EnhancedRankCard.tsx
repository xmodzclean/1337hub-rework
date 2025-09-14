import React from 'react';
import RankCard from './RankCard';
import { usePoolerData } from '@/contexts/AdmissionContext';

interface EnhancedRankCardProps {
  id: number;
  FullName: string;
  UserName: string;
  nickname: string;
  Rank: number;
  Level: number;
  img: string;
  IsUser: boolean;
  is_even: boolean;
  is_verified: boolean;
  setSelectedId: (id: number) => void;
}

const EnhancedRankCard = React.forwardRef<HTMLDivElement, EnhancedRankCardProps>(
  ({ UserName, ...props }, ref) => {
    const { poolerData } = usePoolerData(UserName);

    return (
      <RankCard
        {...props}
        UserName={UserName}
        accepted={poolerData?.accepted}
        reason={poolerData?.reason}
        isvalidated={poolerData?.isvalidated}
        cheating={poolerData?.cheating}
        ref={ref}
      />
    );
  }
);

EnhancedRankCard.displayName = 'EnhancedRankCard';

export default EnhancedRankCard;
