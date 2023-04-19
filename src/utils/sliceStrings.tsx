import React from "react";
import { ResponsiveDevide } from "../pages/Details/components/Features/sliceSummary";

const sliceStrings = (text: string, endText: number): string => {
  let slicedText = text;
  if (text.length > endText) slicedText = text.substring(0, endText) + "...";
  return slicedText;
};

export const ResSizeText = (sizeWantRes: number): number => {
  const screenWidth: ResponsiveDevide = window.innerWidth;
  let widthPc: ResponsiveDevide = screenWidth - 1200;
  let responsiveText: ResponsiveDevide = sizeWantRes + widthPc / 3;
  return responsiveText;
};

export const sliceStringsReponsive = (
  text: string,
  sizeWantResp: number
): string => {
  let responsiveText: ResponsiveDevide = ResSizeText(sizeWantResp);
  const displayResultText: string = sliceStrings(text, responsiveText);
  return displayResultText;
};

export default sliceStrings;
