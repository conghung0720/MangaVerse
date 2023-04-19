import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const ButtonLeft = () => {
  return (
    <div
      className={`top-[40%] z-20 rounded-full  p-2 cursor-pointer prev-slide relative`}
    >
      <ChevronLeftIcon className="h-5 w-5" />
    </div>
  );
};
export const ButtonRight = () => {
  return (
    <div
      className={`prev-slide top-[40%] right-0 z-20 rounded-full p-2 cursor-pointer next-slide relative`}
    >
      <ChevronRightIcon className="h-5 w-5 " />
    </div>
  );
};
