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
    regular: string;
  };
  links: {
    download_location: string;
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
    links: {
      html: string;
    };
  };
};
