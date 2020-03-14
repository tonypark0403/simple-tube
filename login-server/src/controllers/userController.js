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
