
userController.login = async (req, res) => {
  try {
    let log = await userModel.findOne({
      email_Address: req.body.emailaddress
    });
    if (log && log.password && bcrypt.compareSync(req.body.password, log.password)) {
      return res.status(200).send({
        data: log
      });
    } else {
      return res.status(400).send("Password not match.");
    }
  } catch (error) {
    return res.status(400).send({
      error: error.message
    });
  }
};
