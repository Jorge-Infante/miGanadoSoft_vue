import { apiClient } from "@/api/miGanadoSoftApi";

export const postAnimal = async ({ commit }, params) => {
  var data = new FormData();
  data.append("name", params.data.name);
  data.append("number", params.data.number);
  data.append("weight", params.data.weight);
  data.append("file", params.data.file);
  data.append("image", params.data.image);
  data.append("breed", params.data.breed);
  data.append("species", params.data.species);
  data.append("status", params.data.status);
  params.data.treatment.forEach((item) => {
    data.append("treatment[]", item); // Usando 'items[]' para indicar que es un array
  });
  console.log("NUEVO ARCHIVO : ", params.data.file, "y la data: ", params.data);
  const res = await apiClient.post(params.url, data);
  commit("addEnty", { key: "hato", value: res.data });
  console.log(res, params, commit);
};

export const addImg = ({ commit }, img) => {
  commit("addEnty", { key: "currentPhotos", value: img });
};
