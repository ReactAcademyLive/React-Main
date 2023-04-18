import DisplayData from './L3Left-DisplayData';

export default function BlueBox() {
  //console.log('This is re-rendered!');
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      <DisplayData />
    </div>
  );
}
