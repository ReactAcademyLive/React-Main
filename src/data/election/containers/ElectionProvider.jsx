import React, { useState, useEffect, useContext, useRef } from 'react';
import ElectionContext from './ElectionContext';

export default function ElectionProvider({ children }) {
  const [results, setResults] = useState([]);
  const [selectedRegion, setRegion] = useState(0);
  const [loading, setLoading] = useState({
    isLoading: false,
    lastLoadTime: null,
  });
  const lastLoad = useRef(null);

  // const timer = useRef(null);

  // useEffect(() => {
  //   timer.current = setTimeout(() => {
  //     getData();
  //   }, 3000);
  //   console.log('Will getData in 3 seconds');
  //   return () => {
  //     clearTimeout(timer.current);
  //     console.log('Removes the timer');
  //   };
  // });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading({
      isLoading: true,
      lastLoadTime: lastLoad.current,
    });
    try {
      const result = await fetch(
        //'https://dgeq.org/doc/gen2018-10-01/resultats.json'
        'https://www.dgeq.org/doc/gen2022-10-03/resultats.json'
      );
      const data = await result.json();
      setResults(data.circonscriptions);
    } catch (err) {
      console.log(err);
    } finally {
      lastLoad.current = new Date();
      setLoading({ isLoading: false, lastLoadTime: lastLoad.current });
    }
  }

  return (
    <ElectionContext.Provider
      value={{ results, selectedRegion, setRegion, loading }}
    >
      {children}
    </ElectionContext.Provider>
  );
}

///helpers
export function useResults() {
  return useContext(ElectionContext).results;
}

export function useLoading() {
  return useContext(ElectionContext).loading;
}

export function useSelection() {
  const ctx = useContext(ElectionContext);
  return [ctx.selectedRegion, ctx.setRegion];
}
