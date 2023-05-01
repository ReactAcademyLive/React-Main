import DisplayData from './L3Left-DisplayData';

interface BlueBoxProps {
  firstName: string;
  lastName?: string;
  color: string;
}

export default function BlueBox({ firstName, color }: BlueBoxProps) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      <DisplayData firstName={firstName} color={color} />
    </div>
  );
}
