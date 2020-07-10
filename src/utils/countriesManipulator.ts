import { CountryModel } from '../models/CountryModel';
import { SortType } from './SortType';

interface Props<T> {
  sortType: SortType;
  sortedColumn: keyof T | null;
  filterByColumn: keyof T | null;
  filterValue: string;
}

export function countriesManipulator(countries: CountryModel[], props: Props<CountryModel>) {
  const result = [...countries];

  // SORT
  if (props.sortedColumn) {
    result.sort((lsh, rsh) => {
      switch (props.sortType) {
        case SortType.Asc:
          return lsh[props.sortedColumn!] > rsh[props.sortedColumn!] ? 1 : -1;
        case SortType.Desc:
          return lsh[props.sortedColumn!] < rsh[props.sortedColumn!] ? 1 : -1;
      }

      return 0;
    });
  }

  // FILTER: TODO


  return result;
}

