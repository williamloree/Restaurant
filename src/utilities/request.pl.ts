import axios from "axios";

export const getPl = async () => {
  try {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts/1");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
