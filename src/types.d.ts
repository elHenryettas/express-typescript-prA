export type Weather = "sunny" | "windy" | "cloudy" | "stormy" | "rainy";
export type Visibility = "great" | "good" | "OK" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
/* 
export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>; */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
