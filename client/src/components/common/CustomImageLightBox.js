import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';

const CustomImageLightBox = ({ 
    isOpen,
    setOpen,
    images
}) => {
  const [curIndex, setCurIndex] = useState(0);

  return (
    <>
        {isOpen && (
            <Lightbox
                mainSrc={images[curIndex].src}
                nextSrc={images[(curIndex + 1) % images.length].src}
                prevSrc={images[(curIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => setOpen(false)}
                imageCaption={images[curIndex].title}
                onMovePrevRequest={() =>
                    setCurIndex((curIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setCurIndex((curIndex + 1) % images.length)
                }
            />
        )}
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CustomImageLightBox);
