// export const getEnty = async ({ commit }, params) => {
//   const url = `/api/${params.url}`;
//   const res = await apiClient.get(url);
//   console.log(`RESPONSE GET ENTY TO ${url}`, res);
//   commit(params.mutation1, { key: params.enty, value: res.data });
//   if (params.mutation2) {
//     commit(params.mutation2, res.data.count);
//   }
// };
// export const saveEnty = async ({ commit }, params) => {
//   console.log("DATA POST: ", params.data);
//   const url = `/api/${params.url}`;
//   const res = await apiClient.post(url, params.data);
//   console.log(`RESPONSE POST ENTY TO ${url}`, res);
//   commit(params.mutation1, { key: params.enty, value: res.data });
// };
// export const updateEnty = async ({ commit }, params) => {
//   console.log("DATA PUT: ", params.data);
//   const url = `/api/${params.url}/`;
//   const res = await apiClient.patch(url, params.data);
//   console.log(`RESPONSE PUT ENTY TO ${url}`, res);
//   commit(params.mutation1, {
//     key: params.enty,
//     keySearch: params.keySearch,
//     value: res.data,
//   });
//   return res;
// };
// export const deleteEnty = async ({ commit }, params) => {
//   console.log("DATA DELETE: ", params);
//   const url = `/api/${params.url}`;
//   const res = await apiClient.delete(url);
//   console.log(`RESPONSE POST ENTY TO ${url}`, res);
//   commit(params.mutation1, {
//     key: params.enty,
//     keySearch: params.keySearch,
//     value: res.data,
//   });
// };

