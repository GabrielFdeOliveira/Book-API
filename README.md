# NYT Best seller books API

On this challenge I was prompted to create an application based on the wireframe provided, it is a frontend project that leverages the NYT Books API and is built using TypeScript and React within the Vite framework. Its core functionality enables users to either search for a specific book through the search bar or fetch the current list of best-selling books, and then add them to their personal favorites list. While the browser's memory is currently used to persist data between sessions, a proper backend may be added in the future.

As the API does not provide a "rating" for books, I have implemented a randomized way to display it and once the user add a book to its personal list he can give his own rating to the title. On a similar line, the API returns 0 for all prices, so I also gave the user the ability to edit the price once the item is on it's personal list.
