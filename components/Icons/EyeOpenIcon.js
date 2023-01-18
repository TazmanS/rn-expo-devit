import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const EyeOpenIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="24" height="24" rx="12" fill="#F3F3F3" />
      <Path
        d="M9.96095 12C9.96095 12.5221 10.1684 13.0229 10.5376 13.3921C10.9068 13.7613 11.4076 13.9688 11.9297 13.9688C12.4518 13.9688 12.9526 13.7613 13.3218 13.3921C13.691 13.0229 13.8984 12.5221 13.8984 12C13.8984 11.4779 13.691 10.9771 13.3218 10.6079C12.9526 10.2387 12.4518 10.0312 11.9297 10.0312C11.4076 10.0312 10.9068 10.2387 10.5376 10.6079C10.1684 10.9771 9.96095 11.4779 9.96095 12ZM19.5621 11.5465C17.8957 8.03613 15.3768 6.26953 12 6.26953C8.62149 6.26953 6.10431 8.03613 4.4379 11.5482C4.37106 11.6898 4.3364 11.8444 4.3364 12.0009C4.3364 12.1574 4.37106 12.312 4.4379 12.4535C6.10431 15.9639 8.62325 17.7305 12 17.7305C15.3785 17.7305 17.8957 15.9639 19.5621 12.4518C19.6975 12.167 19.6975 11.8365 19.5621 11.5465ZM11.9297 15.0938C10.2211 15.0938 8.83595 13.7086 8.83595 12C8.83595 10.2914 10.2211 8.90625 11.9297 8.90625C13.6383 8.90625 15.0234 10.2914 15.0234 12C15.0234 13.7086 13.6383 15.0938 11.9297 15.0938Z"
        fill="#5E6272"
      />
    </Svg>
  );
};

export default EyeOpenIcon;