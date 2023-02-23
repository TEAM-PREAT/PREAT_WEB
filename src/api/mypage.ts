import { authenticationRequest } from '@/api';

const mostVisitedURL = '/v1/users/me/most-visited';
const highScoredURL = '/v1/users/me/high-scored';
const similarURL = '/v1/users/me/similar';

export const getMostVisitedAPI = async () => {
  const response = await authenticationRequest.get(mostVisitedURL);

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};

export const getHighScoreAPI = async () => {
  const response = await authenticationRequest.get(highScoredURL);

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};

export const getSimilarAPI = async () => {
  const response = await authenticationRequest.get(similarURL);

  if (response.status === 200) {
    return response.data.data;
  }

  throw new Error();
};
