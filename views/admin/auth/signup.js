const layout = require("../layout");

const getError = (errors, propName) => {
  try {
    return errors.mapped()[propName].msg;
  }
  catch (err) {
    return "";
  }
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        Your id is: ${req.session.userId}
        <form method="POST">
          <input name="email" placeholder="email" />
          ${getError(errors, "email")}
          <input name="password" placeholder="password" type="password" />
          ${getError(errors, "password")}
          <input name="passwordConfirmation" placeholder="confirm password" type="password" />
          ${getError(errors, "passwordConfirmation")}
          <button>Sign Up</button>
        </form>
      </div>
    `
  });
};