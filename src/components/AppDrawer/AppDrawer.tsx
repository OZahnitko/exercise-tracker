import { useAppSelector } from "../../hooks";
import { getDrawer } from "../../store";
import { StyledDrawer } from "./Styles";

const AppDrawer = () => {
  const drawer = useAppSelector(getDrawer);

  return (
    <StyledDrawer
      anchor={drawer.direction}
      onClose={() => drawer.callback!()}
      open={drawer.open}
      direction={drawer.direction}
    >
      {!!drawer.Content && <drawer.Content />}
    </StyledDrawer>
  );
};

export default AppDrawer;
