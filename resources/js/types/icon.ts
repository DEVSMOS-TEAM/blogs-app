/* eslint-disable */
import Icon from '../../../public/resource_main_first_icon.svg';
import Icon2 from '../../../public/resource_main_second_icon.svg';
import image_resource_01 from '../../../public/image_resource_01.png';
import image_resource_02 from '../../../public/image_resource_02.png';
import React from 'react';

export interface LocalIcons{
    [key: string]: any | React.SVGProps<SVGSVGElement>;
}

export const FirstIcon : LocalIcons = Icon as any;
export const SecondIcon : LocalIcons = Icon2 as any;
export const Image1 : LocalIcons = image_resource_01 as any;
export const Image2 : LocalIcons = image_resource_02 as any;


