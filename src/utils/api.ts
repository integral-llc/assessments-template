import { ApiBaseModel } from '../models/ApiBaseModel';
import { useEffect, useState } from 'react';

const apiBaseUrl = 'https://restcountries.eu/rest/v2';

export function useApi<T>(endPoint: string): ApiBaseModel<T> {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiBaseUrl + endPoint)
      .then(response => response.json())
      .then(json => {
        setData(json);
      }, error => {
        setError(error);
      }).finally(() => {
      setLoading(false);
    });
  }, [endPoint]);

  return {
    data: data,
    errorMessage: error,
    loading: loading,
    ok: !error
  };
}
