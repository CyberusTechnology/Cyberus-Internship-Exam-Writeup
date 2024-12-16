import { Html } from "@elysiajs/html";

export const LoginPage = () => (
  <body>
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <div class="space-y-4">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div class="text-white">
            <p class="text-sm">johndoe:complexpassword</p>
          </div>
          <button
            onclick="onLogin()"
            class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </body>
);
