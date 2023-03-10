import StarIcon from '@/components/icons/star';
import { Flex } from '@/styles/core';

interface EvaluationScoreProps {
  score: number;
  onReview?: (score: number) => void;

  iconColor?: string;
}

function EvaluationScore({ score, onReview, iconColor }: EvaluationScoreProps) {
  const fillColor = iconColor ?? '#FF6C3E';

  return (
    <Flex>
      {[0, 0, 0, 0, 0].map((_, idx) => (
        <div key={idx} onClick={() => onReview && onReview(idx + 1)}>
          <StarIcon color={idx < score ? fillColor : '#D9D9D9'} />{' '}
        </div>
      ))}
    </Flex>
  );
}
export default EvaluationScore;
