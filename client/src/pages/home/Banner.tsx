import { FC } from "react";
import BannerImg from "../../assets/banner.png";

type Props = {};

const Banner: FC<Props> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-between gap-12 py-16 md:flex-row-reverse">
      {/* <!-- left side --> */}
      <div className="flex w-full items-center md:w-1/2 md:justify-end">
        <img src={BannerImg} alt="books banner" />
      </div>

      {/* <!-- right side --> */}
      <div className="w-full md:w-1/2">
        <h1 className="mb-7 text-2xl font-medium md:text-5xl">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>

        <button className="btn-primary">Subscribe</button>
      </div>
    </section>
  );
};

export default Banner;
