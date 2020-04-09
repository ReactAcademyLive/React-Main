import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default function Covid(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/countries?sort=cases')
      .then((result) => {
        setCountries(result.data);
      });
  });

  return (
    <>
      <h1>Covid cases by countries</h1>
      <Table color='dark' dark striped>
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
            <tr key={country.country}>
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
