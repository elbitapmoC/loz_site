import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { zebulunTribeData } from "./ZebulunTribeData";

export function ZebulunPageTemplate() {
  return <TribePageTemplate tribeData={zebulunTribeData} />;
}