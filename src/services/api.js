import axios from "axios";

export const APIgetImages = (date) => {
  let url =
    "https://api.nasa.gov/planetary/apod?api_key=gd9oFByg1IGtgeZLBwY11gte3wU0FEpNM2qRzEBN";

  if (date) {
    url = `${url}&date=${date}`;
  }

  return axios
    .get(url)
    .then((result) => result.data)
    .catch((error) => {
      if (error.message.indexOf("Request failed with status code 400") !== -1) {
        return { error: 404, message: "pagina nao encontrada" };
      } else if (error.message.indexOf("Network Error") !== -1) {
        return { error: 500, message: "erro de rede" };
      } else {
        return { error: 505, message: error.message };
      }
    });
};
