import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { ephraimTribeData } from "./EphraimTribeData";

export function EphraimPageTemplate() {
  return <TribePageTemplate tribeData={ephraimTribeData} />;
}
