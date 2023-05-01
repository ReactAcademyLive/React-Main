import { ButtonGroup, Button } from 'react-bootstrap';
import { StatusFilters } from '../common/StatusFilters';

interface FilterButtonProps {
  value: StatusFilters;
  onChange: (value: StatusFilters) => void;
}

type StatusFiltersStrings = keyof typeof StatusFilters;

export default function FilterButtons({
  value: status,
  onChange,
}: FilterButtonProps) {
  const buttonList = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key as StatusFiltersStrings];
    const selected = value === status;
    return (
      <Button
        key={key}
        onClick={() => onChange(value)}
        variant={selected ? 'primary' : 'info'}
      >
        {key}
      </Button>
    );
  });

  return (
    <div className='my-3'>
      <span>Show: </span>
      <ButtonGroup>{buttonList}</ButtonGroup>
    </div>
  );
}
