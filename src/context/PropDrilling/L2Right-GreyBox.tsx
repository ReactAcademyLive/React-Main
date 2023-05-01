import { ChangeEventHandler } from 'react';
import ModifyData from './L3Right-ModifyData';

interface GreyBoxProps {
  firstName: string;
  lastName?: string;
  color: string;
  onChange: ChangeEventHandler;
}

export default function GreyBox({ firstName, color, onChange }: GreyBoxProps) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      <h1>Modify State (Property Drilling)</h1>
      <ModifyData firstName={firstName} color={color} onChange={onChange} />
      {/* <ModifyData {...props} /> */}
    </div>
  );
}
