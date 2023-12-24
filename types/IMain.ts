export interface IBanner {
  id: number;
  title: string;
  image: string;
  link_id: number;
  is_shop: boolean;
}

export interface Pagination<Some> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Some[];
}

export interface IWeather {
  is_weather: boolean;
  icon: string;
}
