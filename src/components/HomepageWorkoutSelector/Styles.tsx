import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: row;

  margin: 0 20px 20px 20px;

  overflow: auto hidden;

  & :not(:last-child) {
    margin-right: 12px;
  }
`;
