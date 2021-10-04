import styled from "styled-components";

export const AvatarWrapper = styled.div`
  align-items: center;

  background: #fbe3d4;
  border-radius: 50%;

  display: flex;

  height: ${({ theme }) => theme.sizes.avatarSize}px;

  justify-content: center;

  width: ${({ theme }) => theme.sizes.avatarSize}px;
`;

export const IconWrapper = styled.div`
  display: inline-block;
`;

export const OuterIconWrapper = styled.div`
  align-items: center;

  display: flex;

  height: ${({ theme }) => theme.sizes.avatarSize}px;

  justify-content: start;

  width: ${({ theme }) => theme.sizes.avatarSize}px;
`;

export const UserNameWrapper = styled.div`
  font-weight: 500;
`;

export const Wrapper = styled.div`
  align-items: center;

  margin: ${({ theme }) => theme.sizes.mainPadding}px;

  display: flex;

  justify-content: space-between;
`;
