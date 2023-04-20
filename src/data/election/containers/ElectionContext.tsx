import { createContext } from 'react';

/**
 * Voting district information
 */
export interface District {
  /** District ID  */
  numeroCirconscription: number;
  /** District Name */
  nomCirconscription: string;
  /** Last Update date, in ISO format  */
  iso8601DateMAJ: string;
  /** Are results final? */
  isResultatsFinaux: boolean;
  /** Number of counted polling boxes */
  nbBureauComplete: number;
  /** Number of total polling boxes */
  nbBureauTotal: number;
  /** Number of valid votes*/
  nbVoteValide: number;
  /** Number of rejected votes */
  nbVoteRejete: number;
  /** Number of total votes */
  nbVoteExerce: number;
  /** Number of registered voters */
  nbElecteurInscrit: number;
  /** Valid vote rate */
  tauxVoteValide: number;
  /** Rejected vote rate */
  tauxVoteRejete: number;
  /** Turnout rate */
  tauxParticipation: number;
  /** Candidates */
  candidats: [
    {
      /** Candidate ID */
      numeroCandidat: number;
      /** Last Name */
      nom: string;
      /** First Name */
      prenom: string;
      /** Political Party ID */
      numeroPartiPolitique: number;
      /** Political Party Acronym */
      abreviationPartiPolitique: string;
      /** Total Votes */
      nbVoteTotal: number;
      /** Vote Rate */
      tauxVote: number;
      /** Advance votes  */
      nbVoteAvance: number;
    }
  ];
}

/** content of the context */
export interface ElectionContextState {
  /** Election Results */
  results: District[];
  /** Currently selected District */
  selectedRegion: number;
  /** Set a new selected District */
  setRegion?: (regionID: number) => void;
  /** is it loading Data. (show spinner) */
  loading: Loading;
}

export interface Loading {
  isLoading: boolean;
  lastLoadTime: Date | null;
}

const ElectionContext = createContext<ElectionContextState>({
  results: [],
  selectedRegion: 0,
  loading: { isLoading: false, lastLoadTime: null },
});

export default ElectionContext;
