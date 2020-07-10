import React, { useState } from 'react';
import { CountryModel } from '../models/CountryModel';
import { SortType } from '../utils/SortType';
import { countriesManipulator } from '../utils/countriesManipulator';
import { ArrowDownCircle, ArrowUpCircle } from 'react-bootstrap-icons';
import './../styles/CountriesComponent.scss';

interface Props {
  countries: CountryModel[];
}

export default function(props: Props) {
  const [sortedColumn, setSortedColumn] = useState<keyof CountryModel>('name');
  const [sortType, setSortType] = useState<SortType>(SortType.Desc);

  const countries = countriesManipulator(props.countries, {
    sortedColumn,
    sortType,
    filterByColumn: null,
    filterValue: ''
  });

  const handleColumnHeaderClick = (columnName: keyof CountryModel) => {
    if (columnName === sortedColumn) {
      setSortType(sortType === SortType.Asc ? SortType.Desc : SortType.Asc);
    } else {
      setSortedColumn(columnName);
    }
  }

  const sortableColumnHeader = (columnName: keyof CountryModel, text: string) => {
    if (columnName === sortedColumn) {
      return <th onClick={() => handleColumnHeaderClick(columnName)}>
        <div className='sorted-column'>
          <div className='column-name'>{text}</div>
          {sortType === SortType.Desc ? <ArrowDownCircle /> : <ArrowUpCircle />}
        </div>
      </th>
    }

    return <th onClick={() => handleColumnHeaderClick(columnName)}>
      {text}
    </th>
  }

  return <div className='countries-component-root'>
    <div className="row">
      <div className="col-12">
        <h4>Countries</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <table className='table table-striped'>
          <thead>
          <tr>
            {sortableColumnHeader('name', 'Country Name')}
            {sortableColumnHeader('capital', 'Capital')}
            {sortableColumnHeader('population', 'Population')}
          </tr>
          </thead>
          <tbody>
          {
            countries.map(c => (
              <tr key={c.alpha3Code}>
                <td>{c.name}</td>
                <td>{c.capital}</td>
                <td>{c.population}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>;
}