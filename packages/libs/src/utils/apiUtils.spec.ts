import { getImageUrl } from './apiUtils';
import { BASE_URL, IMAGE_URL } from '../constants';

describe('getImageUrl', () => {
  it('returns full image URL when given a non-empty token', () => {
    const inputValue = 'abc123';
    const expectedValue = `${BASE_URL}${IMAGE_URL}${inputValue}.jpg`;
    const result = getImageUrl(inputValue);
    expect(result).toBe(expectedValue);
  });

  it('returns the original empty string when given an empty token', () => {
    const result = getImageUrl('');
    expect(result).toBe('');
  });

  it('returns URL ending in .jpg', () => {
    const result = getImageUrl('xyz');
    expect(result.endsWith('.jpg')).toBe(true);
  });

  it('returns correct URL even for tokens with special characters', () => {
    const inputValue = 'token_123-@';
    const expectedValue = `${BASE_URL}${IMAGE_URL}${inputValue}.jpg`;
    const result = getImageUrl(inputValue);
    expect(result).toBe(expectedValue);
  });
});
