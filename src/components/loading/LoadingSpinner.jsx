import React from "react";
import ReactLoading from "react-loading";

function LoadingSpinner() {
  return (
    <div className="flex  justify-center fixed grid  top-0 right-0 bottom-0 left-0 content-center bg-neutral-500/30 z-10">
      <ReactLoading type="spokes" color="#543FBF" height={100} width={100} />
    </div>
  );
}

export default LoadingSpinner;
