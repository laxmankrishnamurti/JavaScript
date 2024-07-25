//Task - 01

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

//Task - 02

const userInfo = {
  _id: Date.now(),
  username: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
  getUsername: function () {
    return this.username;
  },
  getUseremail: function () {
    return this.email;
  },
  getUserInfo: function () {
    return this;
  },
};

export { addTwoNumbers, userInfo };
