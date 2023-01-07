const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

module.exports.getReq = async (url, host, port) => {
  await axios
    .get(url, {
      baseURL: process.env.PROXY_CHECK_URL,
      proxy: {
        protocol: "http",
        host,
        port,
      },
    })
    .then((response) => {
      console.log(response.data);
    });
};
