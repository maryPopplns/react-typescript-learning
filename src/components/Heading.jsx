type headingProps = {
  children: String,
};

export default function Heading(props: headingProps) {
  return <div>{props.children}</div>;
}
