import * as React from "react";
import Svg from "react-native-svg";
import { FunctionComponent } from "react";
import { colors } from "../../../utils/colors";
import { ISvgIcons } from "../types";

export const IconInformations: FunctionComponent<ISvgIcons> = ({
  size = 24,
  color = colors.lightBlue,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="30" fill="#fff" />
      <g transform="translate(27.025 13.292)">
        <path
          d="M36.033,20.451a2.607,2.607,0,0,1,.8-1.959,3.436,3.436,0,0,1,4.332,0,2.795,2.795,0,0,1-.01,3.937,3.394,3.394,0,0,1-4.3,0A2.6,2.6,0,0,1,36.033,20.451ZM41.653,45.39h-5.31V25.578h5.31Z"
          transform="translate(-36.033 -17.723)"
          fill={color}
        />
      </g>
    </Svg>
  );
};
