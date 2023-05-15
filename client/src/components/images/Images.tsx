import React, { useState, useEffect } from "react";
import { getImages } from "../../api/imagesApi";

type Props = {};

const Images = (props: Props) => {
  useEffect(() => {
    (async () => {
      const data = await getImages();
      console.log(data);
    })();
  }, []);

  return <div>Images</div>;
};

export default Images;
