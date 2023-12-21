import styled from "styled-components";

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
}
export const SkeletonLoader = styled.div<SkeletonLoaderProps>`
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  margin: 1em;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
