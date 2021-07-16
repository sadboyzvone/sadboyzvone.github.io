export type Technology = {
  Icon: any;
};

export type Project = {
  Name: string;
  Client: string;
  Year: string;
  Image?: any;
  Description?: string;
  Testimonial?: string;
  Technologies?: Technology[];
  URL?: string;
};
