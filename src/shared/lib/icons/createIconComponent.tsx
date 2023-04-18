import React, { ReactElement } from 'react';
import { SVGProps } from 'shared/icons/types';

export const createSvgComponent = (svgElement: ReactElement) => {
  return (props: SVGProps) => React.cloneElement(svgElement, props);
};
