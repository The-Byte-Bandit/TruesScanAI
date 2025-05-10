// types.ts

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
  isAdmin: boolean;
  analysisData: string | null;
  truthScore: number | null;
  searchResults: SearchResult[];
  success: false,
}

// Add this to your store typings
export type RootState = {
  auth: AuthState;
};
