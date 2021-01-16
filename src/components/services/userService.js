import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/register";
export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
}
