import { Drawer, DrawerProps } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

import { AppDrawerDirection } from "../../contracts/";

interface StyledDrawerProps extends DrawerProps {
  direction: AppDrawerDirection | undefined;
}

export const StyledDrawer = styled<FC<StyledDrawerProps>>(Drawer).attrs(() => ({
  BackdropProps: { invisible: true },
}))`
  .MuiDrawer-paper {
    border-radius: ${(props) =>
      props.direction === AppDrawerDirection.left
        ? "0 15px 15px 0"
        : props.direction === AppDrawerDirection.top
        ? "0 0 15px 15px"
        : "15px 15px 0 0"};
  }
`;

export const Wrapper = styled.div``;

// max-height: ${(props) =>
//   props.direction === AppDrawerDirection.bottom ? 75 : 100}%;

// max-width: ${(props) =>
//   props.direction === AppDrawerDirection.left ? 75 : 100}%;
