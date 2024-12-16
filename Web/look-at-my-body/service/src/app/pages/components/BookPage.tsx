import { Html } from "@elysiajs/html";
import { Navbar } from "./Navbar";

const BookList = () => {
  return (
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-8">
          <input
            id="search"
            type="text"
            placeholder="Search for a book..."
            onkeydown="onSearch(event)"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="books"></div>
      </div>
    </div>
  );
};

export const BookPage = () => {
  return (
    <body>
      <Navbar />
      <BookList />
      <script src="/public/books.js"></script>
    </body>
  );
};

const BookDetail = () => {
  return (
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center mb-6">
          <div class="text-6xl mr-4" id="emoji">
            👩‍🎓
          </div>
          <div>
            <h1 class="text-3xl font-bold mb-2" id="title">
              Pride and Prejudice
            </h1>
            <p class="text-lg text-gray-700" id="author">
              by Jane Austen
            </p>
          </div>
        </div>
        <p class="text-gray-600 mb-4" id="description">
          "Pride and Prejudice" is a novel of manners by Jane Austen, first
          published in 1813. The story follows the character development of
          Elizabeth Bennet, the dynamic and witty protagonist, as she navigates
          issues of class, marriage, and morality in early 19th-century England.
        </p>
        <div class="mt-6">
          <a
            href="/books"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Back to Books
          </a>
        </div>
      </div>
    </div>
  );
};

export const BookDetailPage = () => {
  return (
    <body>
      <Navbar />
      <BookDetail />
      <script src="/public/book.js"></script>
    </body>
  );
};
