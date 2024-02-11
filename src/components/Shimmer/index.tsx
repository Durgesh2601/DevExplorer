import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import { ImageShimmerProps } from "../../types";
import { commonStyles } from "../../constants";

const ImageShimmer: React.FC<ImageShimmerProps> = ({
  width,
  height,
  imageUrl,
  alt,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ position: "relative", width, height }}>
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={width}
          height={height}
          sx={{ ...commonStyles }}
        />
      )}
      <img
        src={imageUrl}
        alt={alt}
        style={{
          ...commonStyles,
          width,
          height,
          display: imageLoaded ? "block" : "none",
        }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default ImageShimmer;
