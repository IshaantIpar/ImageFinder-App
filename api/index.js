import axios from "axios";

const API_KEY = "44649675-4323789c6cae2597f56718396";

const apiURL = `https://pixabay.com/api/videos/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiURL + "&per_page=25&editor_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log(url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const {data} = response;
    return {success:true, data}
  } catch (err) {
    console.log("got error", err.message);
    return { success: false, msg: err.message };
  }
};
