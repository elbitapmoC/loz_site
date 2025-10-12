import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { benjaminTribeData } from "./BenjaminTribeData";

export function BenjaminPageTemplate() {
  return <TribePageTemplate tribeData={benjaminTribeData} />;
}