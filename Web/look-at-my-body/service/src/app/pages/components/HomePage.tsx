import { Html } from "@elysiajs/html";
import { Navbar } from "./Navbar";
export const HomePage = () => {
  return (
    <body>
      <Navbar />
      <div class="p-8">
        <div class="max-w-7xl mx-auto">
          <div class="py-12 px-6 md:py-24 md:px-12 text-center">
            <div class="text-6xl mb-4">📚</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Book Haven
            </h1>
            <p class="text-lg md:text-xl mb-6">
              Discover a world of literature and immerse yourself in the stories
              of the greatest books.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};
