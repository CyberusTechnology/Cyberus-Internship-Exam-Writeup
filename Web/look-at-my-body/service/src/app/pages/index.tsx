import { Html } from "@elysiajs/html";
import Elysia from "elysia";
import { BaseHtml } from "./components/Layout";
import { LoginPage } from "./components/Login";
import { jwtConfig } from "../../utils/config";
import { BookDetailPage, BookPage } from "./components/BookPage";
import { HomePage } from "./components/HomePage";
import { FlagPage } from "./components/FlagPage";

async function checkAuth(auth, jwt) {
  const token: String = auth.value || "";
  let user = null;

  if (token) {
    try {
      user = await jwt.verify(token);
    } catch (error) {
      throw new Error("Invalid token or expired");
    }
  }

  return user;
}

export const pagesRoute = new Elysia()
  .use(jwtConfig)
  .get("/", async ({ redirect, jwt, cookie: { auth } }) => {
    const user = await checkAuth(auth, jwt);
    if (!user) {
      return redirect("/login");
    }

    return (
      <BaseHtml>
        <HomePage />
      </BaseHtml>
    );
  })
  .get("/books", async ({ redirect, jwt, cookie: { auth } }) => {
    const user = await checkAuth(auth, jwt);
    if (!user) {
      return redirect("/login");
    }

    return (
      <BaseHtml>
        <BookPage />
      </BaseHtml>
    );
  })
  .get("/books/:id", async ({ redirect, jwt, cookie: { auth } }) => {
    const user = await checkAuth(auth, jwt);
    if (!user) {
      return redirect("/login");
    }

    return (
      <BaseHtml>
        <BookDetailPage />
      </BaseHtml>
    );
  })
  .get("/login", () => {
    return (
      <BaseHtml>
        <LoginPage />
      </BaseHtml>
    );
  })
  .get("/flag", () => {
    return (
      <BaseHtml>
        <FlagPage />
      </BaseHtml>
    );
  });
