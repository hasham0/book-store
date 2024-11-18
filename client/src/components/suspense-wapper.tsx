import { FC, ReactNode, Suspense } from "react";
import Loading from "./loading";

type Props = {
  children: ReactNode;
};

const SuspenseWrapper: FC<Props> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseWrapper;
