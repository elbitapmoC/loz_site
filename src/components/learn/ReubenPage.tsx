import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { reubenTribeData } from "./ReubenTribeData";

export function ReubenPage() {
  return <TribePageTemplate tribeData={reubenTribeData} />;
}
