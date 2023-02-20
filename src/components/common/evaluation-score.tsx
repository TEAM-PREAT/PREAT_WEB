import StarIcon from '@/components/icons/star';
import { Flex } from '@/styles/core';

interface EvalutaionScoreProps {
  score: number;
  onReview: (score: number) => void;
}

function EvalutaionScore({ score, onReview }: EvalutaionScoreProps) {
  return (
    <Flex>
      {[0, 0, 0, 0, 0].map((_, idx) => (
        <div onClick={() => onReview(idx + 1)}>
          <StarIcon color={idx < score ? '#FF6C3E' : '#D9D9D9'} />{' '}
        </div>
      ))}
    </Flex>
  );
}
export default EvalutaionScore;
