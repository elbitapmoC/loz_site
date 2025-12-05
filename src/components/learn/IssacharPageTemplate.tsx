import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { issacharTribeData } from "./IssacharTribeData";

export function IssacharPageTemplate() {
  return <TribePageTemplate tribeData={issacharTribeData} />;
}