import { Html } from "@elysiajs/html";
import { Navbar } from "./Navbar";

export const FlagPage = () => {
  return (
    <body>
      <Navbar />
      <div class="p-8">
        <div class="max-w-7xl mx-auto text-center">
          <div class="py-12 px-6 md:py-24 md:px-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Oops...🫢
            </h1>
          </div>
        </div>
      </div>
    </body>
  );
};
