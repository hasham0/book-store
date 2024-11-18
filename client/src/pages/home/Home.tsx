import News from "./News";
import Banner from "./Banner";
import TopSeller from "./Top-Seller";
import Recommened from "./Recommened";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommened />
      <News />
    </>
  );
}
