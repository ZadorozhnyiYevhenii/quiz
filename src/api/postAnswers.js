import { answerKeyArray } from "../utils/localstorageKeys";
import { BASE_URL } from "../api/core.js";

const answersMap = {};

answerKeyArray.forEach((key) => {
  answersMap[key] = JSON.parse(localStorage.getItem(key));
});

export const postAnswer = async () => {
  try {
    const response = await fetch(`${BASE_URL}/answers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answersMap),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while loading to the server");
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
