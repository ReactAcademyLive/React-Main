import { useState, useEffect, useContext, useRef, ReactNode } from 'react';
import ElectionContext, { District, Loading } from './ElectionContext';

interface ElectionProviderProps {
  children: ReactNode;
}

export default function ElectionProvider({ children }: ElectionProviderProps) {
  const [results, setResults] = useState<District[]>([]);
  const [selectedRegion, setRegion] = useState<number>(0);
  const [loading, setLoading] = useState<Loading>({
    isLoading: false,
    lastLoadTime: null,
  });
  const lastLoad = useRef<Date | null>(null);

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
      setResults(data.circonscriptions as District[]);
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

export function useSelection(): [
  number,
  ((regionID: number) => void) | undefined
] {
  const ctx = useContext(ElectionContext);
  return [ctx.selectedRegion, ctx.setRegion];
}
