import { ReactNode } from "react";

const NarrowCard: React.FC<{
  data: { text: string; icon: ReactNode }[];
}> = ({ data }) => {
  return (
    <div className="border flex flex-col gap-3 border-gray-800 rounded-3xl xl:w-80 w-full pb-3">
      <h3 className="bg-gray-700 rounded-t-3xl text-white text-2xl text-center p-6">
        გადაწყვეტები
      </h3>
      {data.map((item, i) => {
        return (
          <div key={i + item.text} className="flex flex-col items-center">
            {item.icon}
            <p className="text-center">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NarrowCard;
