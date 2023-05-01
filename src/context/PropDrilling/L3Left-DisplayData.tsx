interface DisplayDataProps {
  firstName: string;
  lastName?: string;
  color: string;
}

export default function DisplayData({ firstName, color }: DisplayDataProps) {
  return <h1 style={{ color: color }}>The name is {firstName}</h1>;
}
