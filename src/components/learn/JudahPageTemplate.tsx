import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { judahTribeData } from "./JudahTribeData";

export function JudahPageTemplate() {
  return <TribePageTemplate tribeData={judahTribeData} />;
}