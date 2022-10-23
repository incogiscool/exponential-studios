import { ReactNode } from "react";

type OfferProps = {
  title: string;
  desc: string;
  icon?: ReactNode;
};

const Offer = ({ title, desc, icon }: OfferProps) => {
  return (
    <div className="bg-white text-black flex items-center content-center p-3 m-8 rounded-md h-64 min-w-[350px] sm:max-w-[550px]">
      <div className="m-3">{icon}</div>
      <div className="m-3">
        <h1 className="font-bold sm:text-2xl text-xl">{title}</h1>
        <p className="font-medium text-lg max-w-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Offer;
