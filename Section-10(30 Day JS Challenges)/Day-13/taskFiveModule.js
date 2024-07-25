export const _id = Date.now();
export const username = "Harshad Mehta";
export const email = "harshadmehta@gmail.com";
export const age = 22;

export function getUsername() {
  return this.username;
}

export function getUseremail() {
  return this.email;
}

export function getUserInfo() {
  return this;
}
