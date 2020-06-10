import axios from "axios";
import camelcaseKeysDeep from "camelcase-keys-deep";

//api.jikan.moe/v3/search/anime?q=<query>&limit=16&page=<pagenu>

const BASE_URL = "https://api.jikan.moe/v3";

export default class ApiProviders {
  async searchItems(query = "naruto", page = 1, limit = 9) {
    const params = {
      q: query,
      limit,
      page,
    };

    try {
      const { data } = await axios.get(`${BASE_URL}/search/anime`, { params });
      return camelcaseKeysDeep(data);
    } catch (error) {
      console.log(error);
      return { results: [], lastPage: 1 };
    }
  }
}
