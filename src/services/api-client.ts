import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9171b4404b224f4e80f2b200e9201960",
  },
});