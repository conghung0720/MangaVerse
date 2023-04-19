import React, { useState } from "react";
import sliceStrings, {
  ResSizeText,
  sliceStringsReponsive,
} from "../../../../utils/sliceStrings";

export type ResponsiveDevide = number;

const SliceSummary: React.FC<{ summary: string }> = ({
  summary,
}): JSX.Element => {
  const [isBoolDisplay, setIsBoolDisplay] = useState<boolean>(true);
  const textButton: string = isBoolDisplay ? "Display" : "Hidden";

  const responsiveSummary = ResSizeText(354);

  const displayResultText: string = isBoolDisplay
    ? sliceStringsReponsive(summary, 354)
    : summary;

  const handleSliceText = (): void => {
    setIsBoolDisplay(!isBoolDisplay);
  };

  const displayButton: JSX.Element | false = summary.length >
    responsiveSummary && (
    <span className="cursor-pointer " onClick={handleSliceText}>
      {textButton}
    </span>
  );

  return (
    <>
      <p className="mt-2 text-slate-200">{displayResultText}</p>
      <div className="animate-bounce mt-2 font-semibold text-orange-100">
        {displayButton}
      </div>
    </>
  );
};

export default SliceSummary;
