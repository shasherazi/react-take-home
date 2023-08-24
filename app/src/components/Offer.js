import React from "react";
import { OfferHeader } from "./OfferHeader";
import "../styles/Offer.css";
import { MediaGallery } from "./MediaGallery";

export const Offer = ({
  campaign_icon_url,
  campaign_name,
  pay_per_install,
  medias
}) => {
  return (
    <div className="offer">
      <OfferHeader campaign_icon_url={campaign_icon_url} campaign_name={campaign_name} pay_per_install={pay_per_install} />
      <MediaGallery medias={medias} />
    </div>
  );
};
