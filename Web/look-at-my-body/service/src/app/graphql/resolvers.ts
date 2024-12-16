import { GraphQLError } from "graphql";
import data from "../../db/data";

const flag = "flag{5d947140cc1811ba52f5bd4581764cb77919}";

function checkAuth(ctx) {
  if (!ctx.user) {
    throw new GraphQLError("Unauthorized", {
      extensions: {
        code: "UNAUTHORIZED",
      },
    });
  }
}

function generateToken(
  jwt,
  user: { id: number; username: string; admin: boolean }
) {
  return jwt.sign(user);
}

const booksResolver = (_, __, ctx) => {
  checkAuth(ctx);
  return data.books;
};
const bookResolver = (_: any, args: { id: number }, ctx) => {
  checkAuth(ctx);
  const { id } = args;
  return data.books.find((book) => book.id === id);
};

const searchBookResolver = (_: any, args: { title: string }, ctx) => {
  checkAuth(ctx);
  const { title } = args;
  return data.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
};
const usersResolver = (_, __, ctx) => {
  checkAuth(ctx);
  return data.users;
};
const loginResolver = (_: any, args, ctx) => {
  const { username, password } = args;
  const user = data.users.find((user) => user.username === username);
  if (!user || user.password !== password) {
    throw new GraphQLError("Invalid username or password", {
      extensions: {
        code: "UNAUTHORIZED",
      },
    });
  }
  const param = {
    id: user.id,
    username: user.username,
    admin: user.username === "secret-user",
  }
  const token = generateToken(ctx.jwt, param);
  
  return { token, user_info: user };
};

const flagResolver = (_, __, ctx) => {
  if (!ctx.user) {
    return { value: "https://www.youtube.com/watch?v=U_vPdcFVZ28", message: "Do you have cookie? give me pls :)" };
  }
  if (!ctx.user.admin) {
    return { value: "https://www.youtube.com/watch?v=L_6Q28__BCI", message: "Only secret-user!!" };
  }
  return { value: flag, message: "This is a flag🥳" };
};

const resolvers = {
  Query: {
    books: booksResolver,
    book: bookResolver,
    searchbook: searchBookResolver,
    users: usersResolver,
    flag: flagResolver,
  },
  Mutation: {
    login: loginResolver,
  }
};

export default resolvers;
