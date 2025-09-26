import LayoutConfig from "./components/LayoutConfig";
import detailTop from "./assets/detail-top.png";
import logo from "./assets/logo.png";
import { ArrowDownCircle } from "lucide-react";
import Buttons from "./components/Buttons";
import photo from "./assets/duda.png";
import sticky from "./assets/sticky.png";

const Home = () => {
  return (
    <LayoutConfig>
      <div className="relative overflow-hidden w-screen sm:w-[440px] bg-yellow-dudaris min-h-[762px] rounded-xl flex justify-center px-5">
        <img src={detailTop} alt="detail-top" className="absolute -top-1" />
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="logo" width={280} height={300} />
          <h1 className="text-blue-dudaris text-xl font-bold -mt-[120px]">
            Fitness & Beach Wear
          </h1>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-semibold text-blue-dudaris">NOSSOS LINKS</h2>
            <ArrowDownCircle className="animate-bounce text-blue-dudaris" />
          </div>
          <Buttons />
          <div className="relative">
            <img src={photo} alt="photo-duda" />
            <img
              src={sticky}
              alt="sticky-dudaris"
              width={100}
              height={100}
              className="absolute -left-16 top-0"
            />
          </div>
        </div>
        <img
          src={sticky}
          alt="sticky-dudaris"
          width={75}
          height={75}
          className="absolute top-15 right-10"
        />
      </div>
    </LayoutConfig>
  );
};

export default Home;
