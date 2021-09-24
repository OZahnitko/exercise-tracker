import { FC, useRef } from "react";

import {
  getSelectedHomepageSection,
  setSelectedHomepageSection,
  useAppDispatch,
  useAppSelector,
} from "../../../../store";
import { Wrapper } from "./Styles";

export enum OverflowDirection {
  x,
  y,
}

interface HomepageSectionProps {
  large?: boolean;
  overflowDirection?: OverflowDirection;
}

const HomepageSection: FC<HomepageSectionProps> = ({
  children,
  large,
  overflowDirection = OverflowDirection.x,
}) => {
  const dispatch = useAppDispatch();
  const selectedHomepageSection = useAppSelector(getSelectedHomepageSection);

  const homepageSectionRef = useRef<HTMLDivElement>(null);

  const handleSetSelectedHomepageSection = () => {
    if (selectedHomepageSection !== homepageSectionRef.current) {
      dispatch(setSelectedHomepageSection(homepageSectionRef.current!));
    }
  };

  return (
    <Wrapper
      isActive={
        selectedHomepageSection !== null &&
        selectedHomepageSection === homepageSectionRef.current
      }
      large={large}
      onClick={handleSetSelectedHomepageSection}
      onScroll={handleSetSelectedHomepageSection}
      overflowDirection={overflowDirection}
      ref={homepageSectionRef}
    >
      {children || "Hello from the other side"}
    </Wrapper>
  );
};

export default HomepageSection;
