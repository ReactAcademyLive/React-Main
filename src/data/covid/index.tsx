import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Table, Button } from 'react-bootstrap';
// import { MyMap } from './MyMap';

interface Country {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

const formatNum = Intl.NumberFormat('en-US').format;

export default function Covid() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    getData();
  }, []);

  // eslint-disable-next-line
  function getDataPromises() {
    setFetching(true);
    axios
      .get('https://disease.sh/v3/covid-19/countries?sort=cases')
      .then((resp) => {
        setCountries(resp.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setFetching(false);
      });
  }

  async function getData() {
    try {
      setFetching(true);
      const resp = await axios.get(
        'https://disease.sh/v3/covid-19/countries?sort=cases'
      );
      setCountries(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  }

  return (
    <>
      <h1 className='d-flex'>
        Covid cases by countries{' '}
        <Button
          variant='primary'
          size='sm'
          className='ms-auto mt-auto'
          onClick={getData}
        >
          Refresh Data
        </Button>
      </h1>
      {/* <MyMap
        lat={selectedCountry?.countryInfo.lat}
        long={selectedCountry?.countryInfo.long}
      /> */}
      {isFetching ? (
        <Spinner variant='primary' animation='border' />
      ) : (
        <Table variant='dark' bordered striped hover>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Country</th>
              <th>Cases</th>
              <th>Today cases</th>
              <th>Today recovered</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr
                key={country.country}
                onClick={() => setSelectedCountry(country)}
                //style={{ cursor: 'pointer' }}
                role='button'
                className={country === selectedCountry ? 'bg-primary' : ''}
              >
                <td>
                  <img
                    src={country.countryInfo.flag}
                    alt={'flag of ' + country.country}
                    height='30px'
                  />
                </td>
                <td>{country.country}</td>
                <td>{formatNum(country.cases)}</td>
                <td>{formatNum(country.todayCases)}</td>
                <td>{formatNum(country.todayRecovered)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
