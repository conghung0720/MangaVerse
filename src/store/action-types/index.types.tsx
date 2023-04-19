export interface ListDataNotChange {
    dataOfChapter: {
      link: string;
      chapter: string[];
      chapter_url: string[];
      timeChapter: string[];
    }[];
  }

export interface ListData extends ListDataNotChange{
  dataFilter: {
    link: string;
    chapter: string[];
    chapter_url: string[];
    timeChapter: string[];
  }[];
}

export interface ActionFindChapter {
  type: string,
  payload: string,
}