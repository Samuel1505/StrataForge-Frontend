import { Token, sampleTokens } from '../app/listings/tokenData';

export const getTokenById = (id: string): Token | undefined => {
  return sampleTokens.find((token) => token.id === id);
};

export const getAllTokens = (): Token[] => {
  return sampleTokens;
};

export const getTokensByType = (type: string): Token[] => {
  return sampleTokens.filter((token) => token.type === type);
};
