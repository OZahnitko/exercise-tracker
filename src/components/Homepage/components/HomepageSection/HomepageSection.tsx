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

  return (
    <Wrapper
      isActive={selectedHomepageSection === homepageSectionRef.current}
      large={large}
      onClick={() =>
        dispatch(setSelectedHomepageSection(homepageSectionRef.current!))
      }
      ref={homepageSectionRef}
    >
      {children || "Hello from the other side"}
    </Wrapper>
  );
};

export default HomepageSection;
