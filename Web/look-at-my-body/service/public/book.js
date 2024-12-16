async function getBook(id) {
  const result = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{ book(id: ${id}) { id title author emoji description } }`,
    }),
  });
  const json = await result.json();
  return json.data.book;
}

async function renderBook(id) {
  const book = await getBook(id);
  const emojiElem = document.getElementById("emoji");
  const titleElem = document.getElementById("title");
  const authorElem = document.getElementById("author");
  const descriptionElem = document.getElementById("description");

  emojiElem.innerHTML = book.emoji;
  titleElem.innerHTML = book.title;
  authorElem.innerHTML = book.author;
  descriptionElem.innerHTML = book.description;
}
const id = window.location.pathname.replace("/books/", "");
renderBook(id);
