import styled from "styled-components";

export const BodyWrapper = styled.div`
  border: 1px solid red;

  margin: 10px 10px 0 0;
`;

export const ControlsWrapper = styled.div`
  align-items: center;

  border: 1px solid red;

  display: flex;

  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  border: 1px solid blue;

  display: flex;

  justify-content: space-between;
`;

export const HeaderIconWrapper = styled.div`
  align-items: center;

  border: 1px solid black;

  display: flex;

  margin-right: 10px;
`;

export const InformationWrapper = styled.div`
  align-items: center;
  border: 1px solid red;

  display: flex;

  font-size: 1.17rem;
  font-weight: 500;

  max-width: 60%;

  display: flex;
`;

export const Wrapper = styled.div`
  background-color: #ddf2ff;
  border-radius: 15px;

  display: flex;

  flex-direction: column;

  margin-bottom: 10px;

  padding: 20px 10px 20px 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
