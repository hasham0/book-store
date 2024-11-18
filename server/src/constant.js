export const { ACCESS_TOKEN, DB_NAME, REFRESH_TOKEN, cookieOptions } =
  Object.freeze({
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
    DB_NAME: "bookStore",
    cookieOptions: {
      httpOnly: true,
      secure: true,
    },
  });
