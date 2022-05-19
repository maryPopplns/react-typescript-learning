type personListProps = {
  names: {
    first: String,
    last: String,
  }[],
};

export default function PersonList(props: personListProps) {
  return (
    <div>
      {props.names.map(({ first, last }) => {
        return (
          <>
            <div>{first}</div>
            <div>{last}</div>
          </>
        );
      })}
    </div>
  );
}
