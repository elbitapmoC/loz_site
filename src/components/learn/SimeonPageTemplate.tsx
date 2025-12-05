import React from "react";
import { TribePageTemplate } from "./TribePageTemplate";
import { simeonTribeData } from "./SimeonTribeData";

export function SimeonPageTemplate() {
  return <TribePageTemplate tribeData={simeonTribeData} />;
}
