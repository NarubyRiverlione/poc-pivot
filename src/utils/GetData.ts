// create a dummy function to get data from an API with a set timeout of 1 second
import dummyData from "../data/dummyData";
import type { DataItem } from "./PrepareData";

const getData = (): Promise<DataItem[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            //   reject(new Error("Error fetching data")); // Simulate an error
            resolve(dummyData);
        }, 1000);
    });
};

export default getData;
