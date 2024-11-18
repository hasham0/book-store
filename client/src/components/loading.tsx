import { FC } from "react";
import { BarLoader } from "react-spinners";

type Props = {};

const Loading: FC<Props> = ({}) => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <BarLoader />
    </section>
  );
};

export default Loading;
