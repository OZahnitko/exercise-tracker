import styled from "styled-components";

import background from "./img.png";

export const HeadingContainer = styled.div`
  align-items: center;

  display: flex;

  justify-content: center;

  margin-top: 12px;
`;

export const Wrapper = styled.div`
  background: url(${background});
  background-color: #ffe6d6;
  border-radius: 15px;

  flex-shrink: 0;

  height: 236px;

  width: 142px;
`;
