import { useEffect, useRef } from "react";

import { InputWrapper, SearchInputIcon, StyledInput, Wrapper } from "./Styles";

import {
  addObservedElement,
  setShowUserPanel,
  useAppDispatch,
} from "../../store";

const UserPanel = () => {
  const dispatch = useAppDispatch();

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      dispatch(
        addObservedElement({
          element: wrapperRef.current!,
          callback: () => dispatch(setShowUserPanel(false)),
        })
      );
    }
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <InputWrapper>
        <StyledInput placeholder="Search" />
        <SearchInputIcon
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4419 10.442C10.5348 10.349 10.6451 10.2753 10.7665 10.2249C10.8879 10.1746 11.018 10.1487 11.1494 10.1487C11.2809 10.1487 11.411 10.1746 11.5324 10.2249C11.6538 10.2753 11.7641 10.349 11.8569 10.442L15.7069 14.292C15.8946 14.4795 16.0001 14.7339 16.0001 14.9991C16.0002 15.2644 15.895 15.5189 15.7074 15.7065C15.5199 15.8941 15.2656 15.9996 15.0003 15.9997C14.735 15.9998 14.4806 15.8945 14.2929 15.707L10.4429 11.857C10.35 11.7641 10.2762 11.6538 10.2259 11.5324C10.1756 11.411 10.1497 11.2809 10.1497 11.1495C10.1497 11.0181 10.1756 10.888 10.2259 10.7666C10.2762 10.6452 10.35 10.5349 10.4429 10.442H10.4419Z"
            fill="#C4C4C4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.5 12C7.22227 12 7.93747 11.8577 8.60476 11.5813C9.27205 11.3049 9.87837 10.8998 10.3891 10.3891C10.8998 9.87837 11.3049 9.27205 11.5813 8.60476C11.8577 7.93747 12 7.22227 12 6.5C12 5.77773 11.8577 5.06253 11.5813 4.39524C11.3049 3.72795 10.8998 3.12163 10.3891 2.61091C9.87837 2.10019 9.27205 1.69506 8.60476 1.41866C7.93747 1.14226 7.22227 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 7.95869 1.57946 9.35764 2.61091 10.3891C3.64236 11.4205 5.04131 12 6.5 12ZM13 6.5C13 8.22391 12.3152 9.87721 11.0962 11.0962C9.87721 12.3152 8.22391 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5Z"
            fill="#C4C4C4"
          />
        </SearchInputIcon>
      </InputWrapper>
    </Wrapper>
  );
};

export default UserPanel;
