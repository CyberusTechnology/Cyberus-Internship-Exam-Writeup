function onCardClick(id) {
  window.location.href = `/books/${id}`;
}

async function onSearch(event) {
  if (event.key !== "Enter") {
    return;
  }
  const title = document.getElementById("search").value;
  if (title) {
    await renderBooks(getBooksSearch, title);
  } else {
    await renderBooks(getBooks);
  }
}

async function getBooks() {
  const result = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{ books { id title author emoji } }`,
    }),
  });
  const json = await result.json();
  return json.data.books;
}
async function getBooksSearch(title) {
  const result = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{ searchbook (title: "${title}") { id title author emoji } }`,
    }),
  });
  const json = await result.json();
  return json.data.searchbook;
}

async function renderBooks(func, title) {
  let books = [];
  if (title) {
    books = await func(title)
  }else{
    books = await func();
  }
  const booksElem = document.getElementById("books");

  booksElem.innerHTML = "";
  books.forEach((book) => {
    const bookElem = `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" onclick="onCardClick(${book.id})">
        <div class="p-6">
          <div class="text-4xl text-gray-700 mb-4">${book.emoji}</div>
          <h2 class="text-xl font-bold mb-2">${book.title}</h2>
          <p class="text-gray-600">by ${book.author}</p>
        </div>
      </div>
    `;

    // Add the new book element to the DOM
    booksElem.innerHTML += bookElem;
  });
}

renderBooks(getBooks);
