import * as React from "react";
import { SVGProps } from "react";
const ExportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v128H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h168v112c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 272v-48h110.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0l128 128z" />
  </svg>
);
export default ExportIcon;
