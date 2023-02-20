import StarIcon from '@/components/icons/star';

interface EvalutaionScoreProps {
  score: number;
}
function EvalutaionScore({ score }: EvalutaionScoreProps) {
  const arr = [];

  return (
    <div>
      {[0, 0, 0, 0, 0].map((_, idx) =>
        idx < score ? <StarIcon /> : <StarIcon color="#D9D9D9" />,
      )}
    </div>
  );
}
export default EvalutaionScore;
