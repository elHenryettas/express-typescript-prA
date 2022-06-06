import { DiaryEntry} from "../types";
import { Visibility, Weather } from "../enums"
const _diaries : DiaryEntry[] = [
    {
      "id": 1,
      "date": "2017-01-01",
      "weather":Weather.Rainy,
      "visibility": Visibility.Poor,
      "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
      "id": 2,
      "date": "2017-04-01",
      "weather": Weather.Windy,
      "visibility":Visibility.Good,
      "comment": "Everything went better tha expected, I'm learing much"
    },
    {
      "id": 3,
      "date": "2017-05-15",
      "weather": Weather.Sunny,
      "visibility": Visibility.Good,
      "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
      "id": 4,
      "date": "2017-04-06",
      "weather": Weather.Cloudy,
      "visibility": Visibility.Ok,
      "comment": "I almost failed the landing but i survived"
    }
  ]
  export default _diaries