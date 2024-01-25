export type responseQuery = {
  results: Array<ImageData>;
  total_pages: number;
};

export type ImageData = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  description: string;
  alt_description: string;
  liked_by_user: boolean;
  likes: number;
  urls: {
    small: string;
  };
};
