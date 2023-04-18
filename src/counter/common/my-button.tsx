import { Button } from 'react-bootstrap';

interface MyButtonProps {
  value: number;
  onIncrement: (incr: number) => void;
}

export default function MyButton({ onIncrement, value }: MyButtonProps) {
  return (
    <Button
      variant={value >= 0 ? 'primary' : 'danger'}
      className='me-3'
      onClick={(evt) => onIncrement(value)}
    >
      {value >= 0 ? 'increment' : 'decrement'} {Math.abs(value)}
    </Button>
  );
}
