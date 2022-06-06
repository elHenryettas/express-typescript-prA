import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((e) => e.id === id);
  if (entry) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const getEntriesWithputSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });
  };

export const addEntry = (
  date: string,
  weather: string,
  visibility: string,
  comment: string
): DiaryEntry => {
  const newDiaryEntry = diaries.length;
};
