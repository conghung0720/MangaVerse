

export interface Comics extends DataMetrics {
  imageSrc: string;
  title: string;
  altName?: string[];
  status: string;
  authors: string[] | string;
  tags: string[];
  summary: string;
  link?: string;
}

export interface DataMetrics{
    hearts: number;
    views?: number;
    ratings?: number;
}

