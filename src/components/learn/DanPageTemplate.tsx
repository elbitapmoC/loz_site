import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { danTribeData } from "./DanTribeData";

export function DanPageTemplate() {
  return <TribePageTemplate tribeData={danTribeData} />;
}