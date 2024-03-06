const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);

    req.body = parseBody;
    next();
  } catch (error) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = error.errors.map((err) => err.message);
    const err = {
      status,
      message,
      extraDetails,
    };
    // res.status(400).json({ msg: error.errors.map((err) => err.message) });
    next(err);
  }
};

module.exports = validate;
