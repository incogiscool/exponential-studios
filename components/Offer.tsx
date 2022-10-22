import { ReactNode } from "react";

type OfferProps = {
  title: string;
  desc: string;
  icon?: ReactNode;
};

const Offer = ({ title, desc, icon }: OfferProps) => {
  return (
    <div className="bg-white text-black flex items-center content-center max-w-lg p-3 m-8 rounded-md">
      <div className="m-3">{icon}</div>
      <div className="m-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="font-medium text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Offer;
