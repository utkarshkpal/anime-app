import axios from "axios";
import camelcaseKeysDeep from "camelcase-keys-deep";

//api.jikan.moe/v3/search/anime?q=<query>&limit=16&page=<pagenu>

const BASE_URL = "https://api.jikan.moe/v3";

export const getListItems = async (query, page, limit = 9) => {
  const params = {
    q: query,
    limit,
    page,
  };

  try {
    const response = await axios.get(`${BASE_URL}/search/anime`, { params });
    return camelcaseKeysDeep(response);
  } catch (error) {
    console.log(error);
    return [];
  }
};
