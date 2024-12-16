import apollo from "@elysiajs/apollo";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import { GraphQLError } from "graphql";

export const graphqlRoute = apollo({
  typeDefs,
  resolvers,
  includeStacktraceInErrorResponses: false,
  introspection: true,
  context: async ({ jwt, cookie: { auth } }) => {
    const token: String = auth.value || "";
    let user = null;
    if (token) {
      try {
        user = await jwt.verify(token);
      } catch (error) {
        throw new GraphQLError("Invalid token or expired", {
          extensions: {
            code: "UNAUTHORIZED",
          },
        });
      }
    }
    return {
      user,
      jwt,
    };
  },
});
