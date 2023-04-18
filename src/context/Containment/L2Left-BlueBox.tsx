import { ReactNode } from 'react';

interface BlueBoxProps {
  children: ReactNode;
}

export default function BlueBox({ children }: BlueBoxProps) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      {children}
    </div>
  );
}
