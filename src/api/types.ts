export interface RestaurantType {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  category: string;
  latitude: number;
  longitude: number;

  rating: {
    hasPredict: boolean; // 예상 별점 존재 유무
    value: number; //  예상 별점 or 평가 별점
  };
  // 내가 평가한 리뷰가 존재하면 hasPredict 는 false + 예상 별점 null + 평가 별점
  // 내가 평가한 리뷰가 없으면 hasPredict true + 예상 별점 + 평가 별점 null
}
