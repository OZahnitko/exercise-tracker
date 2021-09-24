import styled from "styled-components";

export const IconWrapper = styled.div`
  display: inline-block;
`;

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.homepageFooterShadow};

  display: flex;

  justify-content: space-around;

  padding: ${({ theme }) => theme.sizes.homepageFooterPadding}px;
`;
