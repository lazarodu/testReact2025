export type AuthContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
