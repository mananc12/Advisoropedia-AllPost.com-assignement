const User = require("../modles/user.model");
const Post = require("../modles/post.model");

//home route logic
async function home(req, res, next) {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    // console.log(error);
    // res.status(500).json({ msg: "Server Error" });
    next(error);
  }
}

// -------------------------------------------------------------------------------------------------------
//login route logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      const matchPassword = await isUserExist.isPasswordCorrect(password);

      if (matchPassword) {
        const token = await isUserExist.generateToken();
        return res.status(200).json({
          message: "Login Successful!",
          token,
          userID: isUserExist._id.toString(),
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "User not found. Register first." });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ msg: "Error in server" });
    next(error);
  }
};

// ----------------------------------------------------------------------------------------------------------
//register route logic
const register = async (req, res) => {
  try {
    const { userName, name, email, profilePicture, password, confirmPassword } =
      req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({ message: "User already registered!" });
    } else {
      if (password === confirmPassword) {
        const userCreate = await User.create({
          userName,
          name,
          profilePicture,
          email,
          password,
        });
        res.status(200).json({
          message: "Registration Successful",
          token: await userCreate.generateToken(),
          userId: userCreate._id,
        });
      } else {
        return res.status(400).json({ message: "Passwords mismatched" });
      }
    }
  } catch (error) {
    // res.status(500).json("Server Error");
    console.log(error);
    next(error);
  }
};

// ------------------------------------------------------------------------------------------------------------
//post's list
const postsList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to 10 items per page

    // Calculate the skip value based on page and pageSize
    const skip = (page - 1) * pageSize;

    // Fetch paginated posts data from the database
    const allPosts = await Post.find().skip(skip).limit(pageSize).exec();

    // Respond with paginated posts data
    res.status(200).json({
      message: "Post lists displayed successfully!",
      allPosts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error: ", error });
  }
};

module.exports = { home, login, register, postsList };

// ------------------------------------------------------------------------------------------------------------
//exporting
module.exports = { home, login, register, postsList };
