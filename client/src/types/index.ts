export interface BookTS {
  _id: number;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
}

export interface NewTS {
  id: number;
  title: string;
  description: string;
  image: string;
}

export type NavigationTS = {
  name: string;
  href: string;
};
