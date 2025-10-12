import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { leviTribeData } from "./LeviTribeData";

export function LeviPageTemplate() {
  return <TribePageTemplate tribeData={leviTribeData} />;
}