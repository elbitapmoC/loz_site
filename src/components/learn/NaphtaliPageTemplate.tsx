import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { naphtaliTribeData } from "./NaphtaliTribeData";

export function NaphtaliPageTemplate() {
  return <TribePageTemplate tribeData={naphtaliTribeData} />;
}