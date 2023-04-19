
export interface DefineDataManga {
  title: string;
  rating: number;
  tags: string[];
  imageSrc: string;
  author: string;
  link?: string;
}

export interface DataDisplayCarousel {
  slides: DefineDataManga[];
}
