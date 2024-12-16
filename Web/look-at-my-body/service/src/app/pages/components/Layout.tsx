import { Html } from "@elysiajs/html";

export const BaseHtml = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
        <title>Look at my body</title>
        <link rel="stylesheet" href="/public/style.css" />
        <script src="/public/tailwindcss.js"></script>
        <script src="/public/main.js"></script>
      </head>
      {children}
    </html>
  );
};
