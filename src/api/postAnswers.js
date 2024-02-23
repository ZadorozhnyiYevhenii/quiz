import { answerKeyArray } from "../utils/localstorageKeys";
import { BASE_URL } from "../api/core.js";

const dataAnswer = {};

answerKeyArray.forEach((key) => {
  dataAnswer[key] = JSON.parse(localStorage.getItem(key));
});

export const postAnswer = async () => {
  try {
    const response = await fetch(`${BASE_URL}/answers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAnswer),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while loading to the server");
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
