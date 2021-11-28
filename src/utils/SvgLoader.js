import React from "react";
import IconDefs from "./IconSvg";

const SvgLoader = ({ xlinkHref, ...other }) => {
  const iconName = xlinkHref.startsWith("#") ? xlinkHref.slice(1) : xlinkHref;

  if (!IconDefs[iconName]) {
    return <>{null}</>;
  }

  return IconDefs[iconName](other);
};

export default SvgLoader;
