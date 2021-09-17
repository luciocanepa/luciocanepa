import * as React from "react";

import Pen from "../assets/pen.svg";
import Code from "../assets/programming.svg";
import Video from "../assets/video.svg";
import Document from "../assets/document.svg";

const PortfolioCardIcon = ({ tag }) => {
  let icon = 0;
  switch (tag) {
    case "design":
      icon = <Pen />;
      break;
    case "web":
      icon = <Code />;
      break;
    case "video":
      icon = <Video />;
      break;
    case "document":
      icon = <Document />;
      break;
    default:
      icon = <Document />;
  }
  return icon;
};

export default PortfolioCardIcon;
