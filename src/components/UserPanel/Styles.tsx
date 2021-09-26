import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;

  padding: ${(props) => props.theme.sizes.userPanelPadding}px;
  position: absolute;

  width: 100%;

  transition: top 0.1s ease-in-out;
`;
