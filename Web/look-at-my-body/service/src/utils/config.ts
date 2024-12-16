import jwt from "@elysiajs/jwt";

const SECRET_KEY = "b5c07994981509d4d00b2b32a074af3dc4652030e2eaa678df10184c79f7cf65";

export const jwtConfig = jwt({
  name: "jwt",
  secret: SECRET_KEY,
});
