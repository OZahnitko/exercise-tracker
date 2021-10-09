import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  margin: 0 20px 20px 20px;
  max-height: 250px;

  overflow: auto hidden;

  & :not(:last-child) {
    margin-right: 12px;
  }
`;
