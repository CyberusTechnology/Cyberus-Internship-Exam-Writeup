import { Html } from "@elysiajs/html";

export const Navbar = () => {
  return (
    <nav class="navbar p-4 py-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="space-x-4 font-bold">
          <a href="/" class="hover:underline">
            Home
          </a>
          <a href="/books" class="hover:underline">
            Books
          </a>
          <a href="/flag" class="hover:underline">
            Flag?
          </a>
        </div>
        <div class="space-x-4 text-red-500 font-bold">
          <button onclick="onLogout()" class="hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
