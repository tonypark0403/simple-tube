import * as userService from "../services/userService.js";

export const register = (req, res) => {
  userService
    .register(req.body)
    .then(result => {
      res.status(200).json({
        success: result
      });
    })
    .catch(result => {
      res.json({ success: result });
    });
};

export const login = (req, res) => {
  userService
    .login(req.body)
    .then(user => {
      res
        .cookie("x_auth", user.token)
        .status(200)
        .json({
          loginSuccess: true
        });
    })
    .catch(message => {
      res
        .cookie("x_auth", null)
        .status(400)
        .json({ loginSuccess: false, message });
    });
};
