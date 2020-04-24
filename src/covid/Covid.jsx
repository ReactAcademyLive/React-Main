import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
//import { MyMap } from './MyMap';

export default function Covid(props) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/countries?sort=cases')
      .then((result) => {
        setCountries(result.data);
      });
  }, []);

  return (
    <>
      <h1>Covid cases by countries</h1>
      {/* <MyMap
        lat={selectedCountry?.countryInfo.lat}
        long={selectedCountry?.countryInfo.long}
      /> */}
      <Table color='dark' dark striped hover>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Cases</th>
            <th>Today cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr
              key={country.country}
              onClick={() => setSelectedCountry(country)}
              style={{ cursor: 'pointer' }}
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
              <td>{country.cases}</td>
              <td>{country.todayCases}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
