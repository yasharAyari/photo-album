
import { renderHook, waitFor } from '@testing-library/react';
import { useData } from './useData';
import { fetchData } from '../utils/apiUtils';
import { ProfileData } from '../interfaces/profileData';
import { Picture } from '../interfaces/picture';

jest.mock('../utils/apiUtils', () => ({
  fetchData: jest.fn(),
}));

const mockPictures: Picture[] = [
  {
    id: 'pic1',
    owner_id: 'owner1',
    url_token: 'token123',
    width: 800,
    height: 600,
    rating: 'APP_SAFE',
    comment: 'Sample pic',
    is_public: true,
  },
];

const mockProfileData: ProfileData = {
  id: 'profile1',
  name: 'John Doe',
  type: 'ESCORT',
  is_plus: true,
  online_status: 'ONLINE',
  preview_pic: mockPictures[0],
  headline: 'Hello World!',
  last_login: new Date(),
  location: {
    name: 'Berlin',
    country: 'Germany',
    sensor: false,
    is_base_profile: true,
  },
  personal: {
    profile_text: 'I love traveling.',
    height: 180,
    weight: 75,
    target_age: { min: 25, max: 35 },
    spoken_languages: ['English'],
    beard: 'None',
    body_hair: 'Light',
    body_type: 'ATHLETIC',
    ethnicity: 'Caucasian',
    eye_color: 'Brown',
    hair_length: 'Short',
    hair_color: 'BROWN',
    orientation: 'Straight',
    smoker: 'No',
    piercing: 'No',
    tattoo: 'Yes',
    gender_orientation: {
      gender: 'Male',
      orientation: 'Straight',
      looking_for_gender: ['Female'],
      looking_for_orientation: ['Straight'],
    },
    age: 30,
  },
  service: {
    rate_hour: 100,
    rate_night: 500,
    currency: 'EUR',
    service_locations: ['Incall', 'Outcall'],
    service_offerings: [],
  },
  sexual: {
    enabled: true,
    favored_position: 'TOP',
    anal_position: 'BOTTOM',
    dick_size: 'AVERAGE',
    concision: 'Brief',
    dirty_sex: 'No',
    sm: 'Light',
    fisting: 'No',
    fetish: ['Feet'],
    safer_sex: 'Yes',
    kissing: 'Yes',
    oral: 'Yes',
  },
  telephone: '+49 1234567890',
  pictures: mockPictures,
  reviews: [],
  travel_locations: [],
  social_links: [],
  is_public: true,
  is_new: false,
  creation_date: new Date(),
};

describe('useData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('initializes with loading=true', () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(mockProfileData);

    const { result, unmount } = renderHook(() => useData());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeNull();
    unmount();
  });

  it('loads data successfully', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(mockProfileData);
      const { result } = renderHook(() => useData());

      expect(result.current.loading).toBe(true);
      expect(result.current.data).toEqual([]);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.data).toEqual(mockPictures);
      expect(result.current.error).toBeNull();
  });

  it('sets error on failure', async () => {
    const error = new Error('Failed to fetch');
    (fetchData as jest.Mock).mockRejectedValueOnce(error);

    const { result } = renderHook(() => useData());
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(error);
    expect(result.current.data).toEqual([]);
  });
});
