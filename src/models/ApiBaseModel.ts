

export interface ApiBaseModel<T> {
  loading: boolean;
  ok: boolean;
  errorMessage: string;
  data: T;
}
