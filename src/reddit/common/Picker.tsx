import { Form } from 'react-bootstrap';

interface PickerProps {
  value: string;
  onChange: (s: string) => void;
  options: string[];
}

export default function Picker({ value, onChange, options }: PickerProps) {
  return (
    <span>
      <h1>{value}</h1>
      <Form.Select
        className='mb-1'
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </span>
  );
}
