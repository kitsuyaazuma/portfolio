export type BookStatus =
  | "Finished"
  | "Reading"
  | "Partially Read"
  | "Almost Finished"
  | "Not Started";

export type BookItem = {
  name: string;
  status: BookStatus;
  url: string;
  imageUrl: string;
};

export type ArticleItem = {
  url: string;
  title?: string;
  imageUrl?: string;
};

export type ArticleMetadataItem = {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

export type SocialItem = {
  name: string;
  url: string;
};
