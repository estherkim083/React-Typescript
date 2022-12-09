interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
  // React 18 introduces a breaking change with the removal of implicit children in React.FunctionComponent types.
  // To fix this, we now must include the children in the interface along with our other props:
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  console.log(children);
  return (
    <h1>
      {color}
      <div>
        <button onClick={onClick}>Click me</button>
      </div>
      <div>{children}</div>
    </h1>
  );
};
