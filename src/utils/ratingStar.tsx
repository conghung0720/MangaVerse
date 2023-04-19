import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface ValueRatings {
  rating: number;
}

const RatingStar = ({ rating }: ValueRatings): JSX.Element => {
  const [isStarFull, setIsStarFull] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    let tempStarFull = new Array(5).fill(null);
    tempStarFull.map((_, index) => {
      if (index < rating)
        tempStarFull[index] = <StarIcon className="w-4 h-4 text-yellow-400" />;
      else tempStarFull[index] = <StarIcon className="w-4 h-4 text-gray-400" />;
    });
    setIsStarFull(tempStarFull);
  }, [rating]);

  return <>{isStarFull.map((val) => val)}</>;
};

export default RatingStar;
