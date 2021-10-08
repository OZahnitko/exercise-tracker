import { useRef, useState } from "react";

import { SearchIcon } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSearchString, setSearchString } from "../../store";
import { IconContainer, SearchContainer, StyledInput, Wrapper } from "./Styles";

const HomepageSearch = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const searchString = useAppSelector(getSearchString);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Wrapper onClick={() => inputRef.current?.focus()}>
      <SearchContainer isFocused={isFocused}>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <StyledInput
          onChange={(e) => dispatch(setSearchString(e.target.value))}
          onFocus={() => {
            setIsFocused(() => true);
          }}
          onBlur={() => setIsFocused(() => false)}
          placeholder="Search"
          ref={inputRef}
          value={searchString}
        />
      </SearchContainer>
    </Wrapper>
  );
};

export default HomepageSearch;
