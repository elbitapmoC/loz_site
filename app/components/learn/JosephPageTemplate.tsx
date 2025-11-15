import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { josephTribeData } from "./JosephTribeData";

export function JosephPageTemplate() {
  return <TribePageTemplate tribeData={josephTribeData} />;
}