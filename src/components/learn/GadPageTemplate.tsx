import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { gadTribeData } from "./GadTribeData";

export function GadPageTemplate() {
  return <TribePageTemplate tribeData={gadTribeData} />;
}