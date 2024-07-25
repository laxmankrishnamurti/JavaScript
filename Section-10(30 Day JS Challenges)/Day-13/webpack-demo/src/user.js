const userInfo = {
  _id: Date.now(),
  username: "Laxman krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
  getUsername: function () {
    return this.username;
  },
  getUseremail: function () {
    return this.email;
  },
  getUserinfo: function () {
    return this;
  },
};

export default userInfo;
