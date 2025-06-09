import { Picture } from "./picture";

export type ProfileType = 'ESCORT' | 'MODEL' | 'AGENCY' | string;
export type OnlineStatus = 'ONLINE' | 'OFFLINE' | 'BUSY' | string;

export type BodyType = 'SLIM' | 'ATHLETIC' | 'AVERAGE' | 'MUSCULAR' | 'CURVY' | string;
export type HairColor = 'BLONDE' | 'BROWN' | 'BLACK' | 'RED' | 'OTHER' | string;

export type Position = 'TOP' | 'BOTTOM' | 'VERSATILE' | string;
export type DickSize = 'SMALL' | 'AVERAGE' | 'LARGE' | string;

type Location = {
  name: string;
  country: string;
  sensor: boolean;
  is_base_profile: boolean;
};

type TargetAge = {
  min: number;
  max: number;
};

type GenderOrientation = {
  gender: string;
  orientation: string;
  looking_for_gender: string[];
  looking_for_orientation: string[];
};

type Personal = {
  profile_text: string;
  height: number;
  weight: number;
  target_age: TargetAge;
  spoken_languages: string[];
  beard: string;
  body_hair: string;
  body_type: BodyType;
  ethnicity: string;
  eye_color: string;
  hair_length: string;
  hair_color: HairColor;
  orientation: string;
  smoker: string;
  piercing: string;
  tattoo: string;
  gender_orientation: GenderOrientation;
  age: number;
};

type Service = {
  rate_hour: number;
  rate_night: number;
  currency: string;
  service_locations: string[];
  service_offerings: unknown[];
};

type Sexual = {
  enabled: boolean;
  favored_position: Position;
  anal_position: Position;
  dick_size: DickSize;
  concision: string;
  dirty_sex: string;
  sm: string;
  fisting: string;
  fetish: string[];
  safer_sex: string;
  kissing: string;
  oral: string;
};

type ReviewReply = {
  id: number;
  review_id: number;
  text: string;
  updated_at: Date;
};

type Review = {
  id: string;
  comment: string;
  updated_at: Date;
  is_reviewer_genuine: boolean;
  vote?: number;
  reply?: ReviewReply;
  is_reported: boolean;
  reviewer_id?: string;
  reviewer_name?: string;
};

type SocialLink = {
  type: string;
  value: string;
};

export type ProfileData = {
  id: string;
  name: string;
  type: ProfileType;
  is_plus: boolean;
  online_status: OnlineStatus;
  preview_pic: Picture;
  headline: string;
  last_login: Date;
  location: Location;
  personal: Personal;
  service: Service;
  sexual: Sexual;
  telephone: string;
  pictures: Picture[];
  reviews: Review[];
  travel_locations: unknown[];
  social_links: SocialLink[];
  is_public: boolean;
  is_new: boolean;
  creation_date: Date;
};
