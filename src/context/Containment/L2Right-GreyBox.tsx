import { ReactNode } from 'react';

interface GreyBoxProps {
  children: ReactNode;
}

export default function GreyBox({ children }: GreyBoxProps) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      <h1>Containment</h1>
      {children}
    </div>
  );
}
