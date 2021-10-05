import styled from "styled-components";

export const ActivityTimeSummary = styled.div`
  color: #b0b0b0;

  font-size: 15;
  font-weight: 500;

  margin-top: ${({ theme }) => theme.sizes.mainPadding}px;

  text-transform: uppercase;
`;

export const InformationTextWrapper = styled.div``;

export const Wrapper = styled.div`
  align-items: center;

  background: #ddf2ff;
  border-radius: 15px;

  display: flex;

  justify-content: space-between;

  margin-top: ${({ theme }) => theme.sizes.mainPadding}px;

  padding: ${({ theme }) => theme.sizes.secondaryPadding}px;
`;
