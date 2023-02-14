import React, { useEffect } from "react";

const Feed = () => {
  useEffect(() => {
    document.title = "hood | Feed";
  }, []);
  return <div>This is Feed</div>;
};

export default Feed;
