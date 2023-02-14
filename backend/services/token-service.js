const jwt = require("jsonwebtoken");
const RefreshModel = require("../models/refresh-model");
const access_secret = process.env.ACCESS_TOKEN_SECRET;
const refresh_secret = process.env.REFRESH_TOKEN_SECRET;
class TokenService {
  async generateTokens({ userId }) {
    const accessToken = await jwt.sign({ userId }, access_secret, {
      expiresIn: "1h",
    });
    const refreshToken = await jwt.sign({ userId }, refresh_secret, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  }
  async storeRefreshToken({ token, userId }) {
    return await RefreshModel.create({
      refreshToken: token,
      userId,
    });
  }
}

module.exports = new TokenService();
