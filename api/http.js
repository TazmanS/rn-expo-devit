import axios from "axios";
import { SERVER_URL } from "@env";

class HttpApi {
  constructor() {
    this.BASE_URL = SERVER_URL;

    this.api = this.getInstance();
  }

  link(url) {
    return new URL(url, this.BASE_URL);
  }

  getInstance() {
    let ax = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Set the AUTH token for any request
    ax.interceptors.request.use(
      (config) => {
        const token = window.localStorage.getItem(TOKEN_KEY);
        if (token)
          config.headers.Authorization = token ? `Bearer ${token}` : "";

        return config;
      },
      (error) => Promise.reject(error)
    );

    ax.interceptors.response.use(
      (response) => {
        // const newtoken = lodash.get(response, "headers.authorization");
        // if (newtoken) this.setBearer(newtoken);
        return response;
      },
      (error) => {
        // Do something with response error
        if (error && error.response && error.response.status) {
          switch (error.response.status) {
            case 401:
              // app.$events.emit("clearIntervals");
              // window.localStorage.clear();
              // window.location = "/auth";
              break;
          }

          return Promise.reject(error.response);
        } else {
          switch (error.constructor.name) {
            case "Cancel":
              // debug("Axios cancel query");
              break;

            default:
              //app.$notify.error(app.$utils.response("error"));
              break;
          }
        }
      }
    );

    return ax;
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  setBearer(newToken) {
    window.localStorage.setItem(TOKEN_KEY, newToken);
    this.api = this.getInstance();
  }
}

const http = new HttpApi();

export default http;
