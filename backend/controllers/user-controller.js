const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
class UserController {
  async register(userDetails, req, res) {
    let user;
    if (userDetails) {
      user = await userService.getUserByEmail({
        email: userDetails.email,
      });
      if (user !== null) {
        throw new Error(
          JSON.stringify({
            code: 402,
            message: "User Already Exists",
          })
        );
      }
      try {
        const hashPassword = await userService.generateHashPassword({
          password: userDetails.password,
        });
        user = await userService.createUser({
          ...userDetails,
          password: hashPassword,
        });
      } catch (err) {
        throw new Error(err);
      }
    }
    const { accessToken, refreshToken } = await tokenService.generateTokens({
      userId: user._id,
    });
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
      httpOnly: true,
    });
    await tokenService.storeRefreshToken({
      token: refreshToken,
      userId: user._id,
    });
    return user;
  }
  async login({ email, password }, req, res) {
    let user;
    try {
      user = await userService.getUserByEmail({ email });

      if (user === null) {
        throw new Error(
          JSON.stringify({
            code: 404,
            message: "User Not Found",
          })
        );
      }
      const isVerified = userService.verifyHashPassword({
        password,
        hashPassword: user.password,
      });
      if (!isVerified) {
        throw new Error(
          JSON.stringify({
            code: 400,
            message: "Wrong Password",
          })
        );
      }
      const { accessToken, refreshToken } = await tokenService.generateTokens({
        userId: user._id,
      });
      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
      });
      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
        httpOnly: true,
      });
      await tokenService.storeRefreshToken({
        token: refreshToken,
        userId: user._id,
      });
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new UserController();
