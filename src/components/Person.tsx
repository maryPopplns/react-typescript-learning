type personProps = {
  name: {
    first: string;
    last: string;
  };
};

export default function Person(props: personProps) {
  return <div>bruce wayne</div>;
}
