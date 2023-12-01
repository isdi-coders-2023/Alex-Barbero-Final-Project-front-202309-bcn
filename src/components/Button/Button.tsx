import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  text?: string | React.ReactElement;
  className?: string;
}

const Button = ({
  text,
  type,
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={type}
      onClick={actionOnClick}
      children={text}
      className={className}
    />
  );
};

export default Button;
