export type ReadingListStatus =
  | "Finished"
  | "Reading"
  | "Partially Read"
  | "Almost Finished"
  | "Not Started";

export type ReadingListItem = {
  name: string;
  status: ReadingListStatus;
  url: string;
  imageUrl: string;
};

export type SocialItem = {
  name: string;
  url: string;
};
