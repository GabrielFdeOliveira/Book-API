At this point, I needed to work on this component alongside the Home page, to ensure that it would render either the default landing page or the book cards. To achieve this, I created a variable called "renderJSX" that would store either the card component or the default JSX, depending on whether the states "query" or "isBestSeller" held values or not.

In addition, I updated the fetchBooks function to fetch either by a searchTerm or by Best selling list. Since the API responded differently depending on the query we sent, I had to update the "list" state in different ways for both occasions. However, in both cases, the results are rendered using the Card component every time the query or isBestSeller states are updated, as they are included in the useEffect dependencies.

I will write about the favourite button in the Favourites journey.
