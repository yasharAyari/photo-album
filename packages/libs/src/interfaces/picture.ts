export type PictureRating = 'NEUTRAL' | 'EROTIC' | 'APP_SAFE' | string;

export type Picture = {
  id: string;
  owner_id: string;
  url_token: string;
  width: number;
  height: number;
  rating: PictureRating;
  comment?: string;
  is_public: boolean;
};
