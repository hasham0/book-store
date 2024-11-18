import { FC, ReactNode } from "react";

type Props = {
  buttonLabel: string | ReactNode;
  hanldeClick: () => void;
};

const Button: FC<Props> = ({ buttonLabel, hanldeClick }) => {
  return (
    <button
      onClick={hanldeClick}
      className="rounded-md border-2 border-black bg-black p-1 text-base text-white"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
