import { Col, Row } from 'react-bootstrap';
import { useLoading } from '../containers/ElectionProvider';
import { useResults, useSelection } from '../containers/ElectionProvider';

const formatNum = Intl.NumberFormat('en-CA').format;

const formatTime = new Intl.DateTimeFormat('en-CA', { timeStyle: 'medium' })
  .format;

export default function RegionDetails() {
  const [selection] = useSelection();
  const results = useResults();
  const loading = useLoading();

  const region = results.find((r) => r.numeroCirconscription === +selection);

  return !region ? (
    <h3>Choose region</h3>
  ) : (
    <div>
      <h3>{region.nomCirconscription}</h3>
      <p>
        Total votes: {formatNum(region.nbVoteExerce)} (Voter Turnout:{' '}
        {region.tauxParticipation}% ) &mdash; Data last refreshed :{' '}
        {formatTime(loading.lastLoadTime ?? undefined)}
      </p>
      {region.candidats.map((c) => (
        <Row>
          <Col xs={6} className='ps-5'>
            <b>
              {c.prenom} {c.nom}
            </b>{' '}
            ({c.abreviationPartiPolitique})
          </Col>
          <Col xs={3} className='text-end'>
            {formatNum(c.nbVoteTotal)}
          </Col>
          <Col xs={3}>({c.tauxVote}%)</Col>
        </Row>
      ))}
    </div>
  );
}
