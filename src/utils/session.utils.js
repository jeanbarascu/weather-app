import axios from "axios";

class SessionUtils {
  ipLookUp = async () => {
    let result = "";

    try {
      result = await axios.get("http://ip-api.com/json");
    } catch (err) {
      console.log("Request failed.  Returned status of", err);
    }

    return result.data.city;
  };
}

export default new SessionUtils();
