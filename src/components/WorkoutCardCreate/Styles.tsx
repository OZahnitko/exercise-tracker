import styled from "styled-components";

import background from "./img.png";

export const Wrapper = styled.div`
  background: url(${background});
  background-color: #ffe6d6;
  border-radius: 15px;

  cursor: pointer;

  flex-shrink: 0;

  height: 236px;

  padding-top: ${({ theme }) => theme.sizes.secondaryPadding}px;

  text-align: center;

  width: 142px;

  -webkit-tap-highlight-color: transparent;
`;
