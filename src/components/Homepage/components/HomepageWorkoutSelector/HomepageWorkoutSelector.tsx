import { HomepageSection } from "..";
import { Wrapper } from "./Styles";
const HomepageWorkoutSelector = () => {
  return (
    <HomepageSection>
      <Wrapper>
        {Array.from({ length: 4 })
          .map((_, index) => index)
          .map((index) => (
            <div
              key={index}
              onClick={() => console.log("please world")}
              style={{
                background: "#FBE3D4",
                border: "2px solid red",
                height: "200px",

                margin: "0 5px ",
              }}
            >
              Butnotmatterhowmanyofyou little boys I put in the array, you will
              be as long as I want you to be.
            </div>
          ))}
      </Wrapper>
    </HomepageSection>
  );
};

export default HomepageWorkoutSelector;
