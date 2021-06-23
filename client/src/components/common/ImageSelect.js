import React, { useState } from "react";
import GlideComponentThumbs from "../carousel/GlideComponentThumbs";

const ImageSelect = ({ items }) => {
  return (
    <GlideComponentThumbs
      settingsImages={{
        bound: false,
        rewind: false,
        focusAt: 0,
        startAt: 0,
        gap: 5,
        perView: 1,
        data: items,
        dragThreshold: null,
        swipeThreshold: null,
      }}
      settingsThumbs={{
        bound: true,
        rewind: false,
        focusAt: 0,
        startAt: 0,
        gap: 10,
        perView: 5,
        data: items,
        breakpoints: {
          576: {
            perView: 4,
          },
          420: {
            perView: 3,
          },
        },
      }}
    />
  );
};
export default ImageSelect;
