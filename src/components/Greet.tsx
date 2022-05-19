type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return <h2>{props.name} you have 10 messages</h2>;
}
