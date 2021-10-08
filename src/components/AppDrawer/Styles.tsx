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
    color: red;

    max-width: ${(props) =>
      props.direction === AppDrawerDirection.left ? 75 : 100}%;
  }
`;

export const Wrapper = styled.div``;
