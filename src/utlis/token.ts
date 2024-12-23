export function getToken() {
  return localStorage.getItem("token")?.replace(/['"]+/g, "");
}
