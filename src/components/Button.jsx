type buttonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
};

export default function Button(props: buttonProps) {
  return <div onClick={(event) => props.handleClick(event, 1)}>button</div>;
}
