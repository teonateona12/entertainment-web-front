export interface Item {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  regularLarge: string;
  regularMedium: string;
  regularSmall: string;
  title: string;
  trendingLarge: string;
  trendingSmall: string;
  year: number;
  _id: string;
}

export interface HomeProps {
  listItems: Item[];
  trendingItem: Item[];
  recomendedItem: Item[];
  inputValue: string;
  setInputValue: (n: string) => void;
}

export interface Props {
  inputValue: string;
  setInputValue: (n: string) => void;
  listItems: Item[];
}
export interface SearchedItemProps {
  inputValue: string;
  listItems: Item[];
}

export interface TrendEndRecProps {
  trendingItem: Item[];
  recomendedItem: Item[];
}
