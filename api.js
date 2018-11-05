const axios = require("axios");
const BASE_URL = "https://wikihow2-3c6c5.firebaseio.com/";
const AUTH = "ZCWhhalNPwGa7x51VqaP1I2hLiAcgV0T6BkTJHsf";

const list = async key => {
  try {
    const response = await axios.get(`${BASE_URL}${key}.json?auth=${AUTH}`);
    if (response.data) {
      const data = Object.keys(response.data).map(key => {
        return {
          id: key,
          ...response.data[key]
        };
      });

      return data;
    }

    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const remove = async (key, id) => {
  try {
    await axios.delete(`${BASE_URL}${key}/${id}.json?auth=${AUTH}`);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const listById = async (key, id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${key}/${id}.json?auth=${AUTH}`
    );
    if (response.data) {
      const data = {
        id,
        ...response.data
      };

      return data;
    }

    return false;
  } catch (error) {
    throw new Error(error);
  }
};

const update = async (key, id, data) => {
  try {
    await axios.put(`${BASE_URL}${key}/${id}.json?auth=${AUTH}`, data);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const insert = async (key, data) => {
  try {
    await axios.post(`${BASE_URL}${key}.json?auth=${AUTH}`, data);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  list,
  remove,
  listById,
  update,
  insert
};
