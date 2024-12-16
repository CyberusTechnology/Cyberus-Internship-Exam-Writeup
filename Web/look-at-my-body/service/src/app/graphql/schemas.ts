import { gql } from "@elysiajs/apollo";

const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
    emoji: String
    description: String
  }

  type User {
    id: Int
    username: String
    password: String
  }

  type Flag {
    value: String
    message: String
  }

  type LoginResult {
    token: String
		user_info: User
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
    searchbook(title: String): [Book]
    users: [User]
    flag: Flag
  }

  type Mutation {
    login(username: String!, password: String!): LoginResult
  }
`;

export default typeDefs;
