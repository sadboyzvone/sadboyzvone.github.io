export type Technology = {
  Name?: string;
  Icon?: any;
};

export type Project = {
  Name: string;
  Client: string;
  Year: number;
  Image?: any;
  Description?: string;
  Testimonial?: string;
  Technologies?: Technology[];
  URL?: string;
};
