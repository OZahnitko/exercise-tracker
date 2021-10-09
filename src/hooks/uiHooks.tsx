import { useAppDispatch } from ".";
import { closeDrawer } from "../store";

export const useUIHooks = () => {
  const dispatch = useAppDispatch();

  return { closeDrawer: () => dispatch(closeDrawer()) };
};
