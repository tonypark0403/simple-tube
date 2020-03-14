import User from "../models/User.js";

export const register = user => {
  const newUser = new User(user);
  return new Promise((resolve, reject) => {
    newUser.save((err, doc) => {
      if (err) {
        reject(false);
        return;
      }
      resolve(true);
    });
  });
};
