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

  avatarUrl: string;
  setAvatarUrl: (n: string) => void;
  setIsLogin: (n: boolean) => void;
}

export interface Props {
  inputValue: string;
  setInputValue: (n: string) => void;
  listItems: Item[];
  avatarUrl: string;

  setIsLogin: (n: boolean) => void;
}
export interface SearchedItemProps {
  inputValue: string;
  listItems: Item[];
}

export interface TrendEndRecProps {
  trendingItem: Item[];
  recomendedItem: Item[];
}

export interface HeaderProps {
  avatarUrl: string;
  setIsLogin: (n: boolean) => void;
}

export interface Login {
  setIsLogin: (n: boolean) => void;
  setAvatarUrl: (n: string) => void;
}
