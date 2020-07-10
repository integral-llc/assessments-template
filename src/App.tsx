import React from 'react';
import { useApi } from './utils/api';
import { CountryModel } from './models/CountryModel';
import './styles/app.scss';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';
import CountriesComponent from './components/CountriesComponent';

function App() {
  const countriesModel = useApi<CountryModel[]>('/all');

  return <div className='container'>
    {
      !countriesModel.ok
        ? <ErrorComponent errorMessage={countriesModel.errorMessage}/>
        : (
          countriesModel.loading
            ? <LoadingComponent/>
            : <CountriesComponent countries={countriesModel.data}/>
        )
    }
  </div>;
}

export default App;
