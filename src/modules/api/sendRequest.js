import { message } from "antd";
import axios from "axios";
// let API_BASE = "http://localhost:8080/api/"
let API_BASE = "http://5.189.181.111:8080/api/"

const verificationToken = async (url) => {
  if (url !== "login") {
    try {
      let token = localStorage.getItem("token");
      let res = await axios.get(API_BASE + "token/" + token);
      if (res?.data === "ok") {
        return "ok";
      }else if(res?.data === "no"){
        localStorage.clear()
        // window.location.reload();
       }
    } catch {
      message.error("ERROR: Verification Token ")
    }
  }
};

async function sendRequest(url, obj = {}, CRUD = "get") {
  try {
    if(!API_BASE) return 
    let verify = await verificationToken(url);
    if (verify || url === "login") {
      let result = await axios[CRUD](API_BASE + url, obj);
      return result;
    }
  } catch (e) {
    message.error(e.message)
  }
}

export default sendRequest;
