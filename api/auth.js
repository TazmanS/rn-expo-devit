import http from "./http";

const apiLogin = async ({ email, password }) => {
  return await http.api.post("/auth/login", { email, password });
};

export { apiLogin };
