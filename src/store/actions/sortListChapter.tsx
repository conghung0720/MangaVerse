import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionFindChapter, ListData } from "../action-types/index.types";

const initialState: ListData = {
  dataOfChapter: [
    {
      link: "",
      chapter: [],
      chapter_url: [],
      timeChapter: [],
    },
  ],
  dataFilter: [
    {
      link: "",
      chapter: [],
      chapter_url: [],
      timeChapter: [],
    },
  ],
};

export const SortListChapter = createSlice({
  name: "ListChapterFeatures",
  initialState,
  reducers: {
    pushListChapter: (state: ListData, action: PayloadAction<[]>) => {
      state.dataOfChapter = action.payload;
      state.dataFilter = action.payload;
    },
    reverseListChapter: (state) => {
      let dataFilter = state.dataFilter[0];
      dataFilter = {
        link: dataFilter.link,
        chapter: dataFilter.chapter.reverse(),
        chapter_url: dataFilter.chapter_url.reverse(),
        timeChapter: dataFilter.timeChapter.reverse(),
      };
    },
    findChapter: (state, action: ActionFindChapter) => {
      state.dataFilter = state.dataOfChapter;
      const dataOfChapter = state.dataOfChapter[0];
      let indexAfterFilter: number[] = [];
      if (action.payload.length > 0) {
        state.dataFilter = [
          {
            ...dataOfChapter,
            chapter: dataOfChapter.chapter.filter(
              (value, index) =>
                value.toLowerCase().includes(action.payload.toLowerCase()) &&
                indexAfterFilter.push(index)
            ),
            chapter_url: indexAfterFilter?.map(
              (value) => dataOfChapter.chapter_url[value]
            ),
          },
        ];
      }
    },
  },
});

export const { pushListChapter, reverseListChapter, findChapter } = SortListChapter.actions;

export default SortListChapter.reducer;
