import { FC, useRef } from "react";

import {
  getSelectedHomepageSection,
  setSelectedHomepageSection,
  useAppDispatch,
  useAppSelector,
} from "../../../../store";
import { Wrapper } from "./Styles";

interface HomepageSectionProps {
  large?: boolean;
}

const HomepageSection: FC<HomepageSectionProps> = ({ children, large }) => {
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
      isActive={selectedHomepageSection === homepageSectionRef.current}
      large={large}
      onClick={handleSetSelectedHomepageSection}
      onScroll={handleSetSelectedHomepageSection}
      ref={homepageSectionRef}
    >
      {children || "Hello from the other side"}
    </Wrapper>
  );
};

export default HomepageSection;
