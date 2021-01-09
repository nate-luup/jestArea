import axios from "axios";

// calback
const fetchData = (callback) => {
  axios.get("http://127.0.0.1:3000/news").then((response) => {
    callback(response.data);
  });
};
// promise
const fetchTwoData = () => {
  return axios.get("http://127.0.0.1:3000/news");
};
// 404
const fetchThreeData = () => {
  return axios.get("http://127.0.0.1:3000/xxx");
};

// async/await
const fetchFourData = () => {
  return axios.get("http://127.0.0.1:3000/news");
};
export { fetchData, fetchTwoData, fetchThreeData, fetchFourData };
