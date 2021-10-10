import * as areaOfEffect from "./areaOfEffect";

// @ponicode
describe("areaOfEffect.reduceUniqueAreasOfEffect", () => {
  it("0", () => {
    let param1: any = [
      {
        aoe: ["legs", "shoulders"],
        name: "Anas",
        type: ["object", "number", "number", "number"],
      },
      {
        aoe: ["legs", "arms"],
        name: "Jean-Philippe",
        type: ["string", "number", "string", "string"],
      },
      {
        aoe: ["legs", "arms", "legs"],
        name: "George",
        type: ["string", "number"],
      },
      {
        aoe: ["legs", "upper back"],
        name: "Edmond",
        type: ["number", "array", "number", "number", "string"],
      },
      {
        aoe: [],
        name: "Edmond",
        type: ["number", "array", "number", "number", "string"],
      },
    ];
    let result: any = areaOfEffect.reduceUniqueAreasOfEffect(param1);
    expect(result).toEqual(["arms", "legs", "shoulders", "upper back"]);
  });
});
