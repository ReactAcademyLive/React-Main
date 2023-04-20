import { useResults } from '../containers/ElectionProvider';
import { useSelection } from '../containers/ElectionProvider';

export default function RegionList() {
  const [selection, setSelection] = useSelection();
  const results = useResults();
  //console.log(results);
  return (
    <>
      <select
        className='form-select form-select-lg '
        // type='select'
        onChange={(evt) => {
          setSelection!(+evt.target.value);
        }}
        value={selection}
      >
        <option value='0'>Choose Region...</option>
        {results.map((region) => (
          <option
            key={region.numeroCirconscription}
            value={region.numeroCirconscription}
          >
            {region.nomCirconscription}
          </option>
        ))}
      </select>
    </>
  );
}
