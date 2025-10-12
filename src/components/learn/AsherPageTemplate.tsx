import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { asherTribeData } from "./AsherTribeData";

export function AsherPageTemplate() {
  return <TribePageTemplate tribeData={asherTribeData} />;
}