import styled from "styled-components";
import { OverflowDirection } from "./HomepageSection";

interface WrapperProps {
  isActive: boolean;
  large?: boolean;
  noBackgroundColor?: boolean;
  noPad?: boolean;
  overflowDirection?: OverflowDirection;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ noBackgroundColor, theme }) =>
    noBackgroundColor
      ? null
      : theme.colors.alpha(
          theme.colors.homepageSectionDefaultColor,
          theme.colors.homepageSectionDefaultAlpha
        )};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isActive && props.theme.shadows.homepageSectionActiveShadow};

  ${(props) => props.large && `height: 400px;`}

  margin: ${({ theme }) => theme.sizes.homepageSectionMargin}px;

  overflow: ${(props) =>
      props.overflowDirection === OverflowDirection.x ? "auto" : "hidden"}
    ${(props) =>
      props.overflowDirection === OverflowDirection.y ? "hidden" : "auto"};

  padding: ${({ noPad, theme }) =>
    noPad ? 0 : theme.sizes.homepageSectionPadding}px;

  transition: box-shadow
    ${(props) => props.theme.times.homepageSectionBoxShadow}s ease-in-out;
`;
