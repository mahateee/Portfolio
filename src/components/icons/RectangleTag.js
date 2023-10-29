import React from "react";

export default function RectangleTag({ x, y }) {
  return (
    <svg
      width="575"
      height="253"
      viewBox="0 0 575 253"
      fill="none"
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M473.473 3.25131L65.2579 102.94C20.4339 113.887 -7.85417 155.72 2.07465 196.377C12.0035 237.034 56.3893 261.12 101.213 250.174L509.428 150.485C554.252 139.538 582.54 97.7052 572.612 57.0478C562.683 16.3905 518.297 -7.69505 473.473 3.25131Z"
        fill="#FE8FAA"
      />
      <text
        x="40%"
        transform="rotate(-13 20 0)"
        y="80%"
        text-anchor="middle"
        fill="black"
        font-size="80px"
      >
        Maha AlShehri
      </text>
    </svg>
  );
}
