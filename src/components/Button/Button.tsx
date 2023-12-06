import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  isDisabled: boolean;
  text?: string | React.ReactElement;
  className?: string;
  title: string;
}

const Button = ({
  text,
  title,
  type,
  className,
  isDisabled,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      title={title}
      disabled={isDisabled}
      type={type}
      onClick={actionOnClick}
      children={text}
      className={className}
    />
  );
};

export default Button;
