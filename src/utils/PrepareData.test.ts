import { describe, it, expect } from "vitest";
import { prepareData } from "./PrepareData";
import { default as dummyData, dummyTableDefinition, dummyTableDefinitionNoMapping } from "../data/dummyData";

describe("PrepareData function", () => {
    it("transform data based dummyTableDefinition ", () => {
        // Call the function
        const result = prepareData(dummyData, dummyTableDefinition);

        // Assert the expected transformed structure
        expect(result).toEqual([
            { Age: 30, Age_Id: "001", Color: "Red", Color_Id: "008", Name: "User 01" },
            { Age: 45, Age_Id: "003", Color: "Blue", Color_Id: "006", Name: "User 02" },
            { Age: 20, Age_Id: "005", Color: "Yellow", Color_Id: "004", Name: "User 03" },
            { Color: "Green", Color_Id: "002", Name: "User 04" },
            { Gender: "Male", Gender_Id: "007", Name: "User 05" },
            { Color: "", Color_Id: "009", Name: "User 06" },
        ]);
    });
    it("transform data without display name mapping", () => {
        // Call the function
        const result = prepareData(dummyData, dummyTableDefinitionNoMapping);

        // Assert the expected transformed structure
        expect(result).toEqual([
            { age: 30, age_Id: "001", Color: "Red", Color_Id: "008", prefix_name: "User 01" },
            { age: 45, age_Id: "003", Color: "Blue", Color_Id: "006", prefix_name: "User 02" },
            { age: 20, age_Id: "005", Color: "Yellow", Color_Id: "004", prefix_name: "User 03" },
            { Color: "Green", Color_Id: "002", prefix_name: "User 04" },
            { Gender: "Male", Gender_Id: "007", prefix_name: "User 05" },
            { Color: "", Color_Id: "009", prefix_name: "User 06" },
        ]);
    });
    it("should handle empty data", () => {
        // Call the function
        const result = prepareData([], dummyTableDefinition);

        // Assert result is empty array
        expect(result).toEqual([]);
    });
});
