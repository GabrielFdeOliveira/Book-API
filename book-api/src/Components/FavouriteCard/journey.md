To differentiate between the rendering of books on the home page and the favourites page, I decided to create a separate card component for the latter. While developing this new card, I copied the styling from the original card component and modified it to suit the new purpose.

In order to ensure the proper functioning of this component, I implemented two new functions, namely handleDelete and handleSearch, in the Favourites page. These functions interact with the values stored in the localStorage/favourites state, and perform their tasks as expected. Additionally, I passed down two new props (comparing it with the original Card) to the FavouriteCard component - index to serve as an argument for the handleDelete function, and handleDelete itself.

To maintain consistency, I decided to use only outlined stars in this component. I plan to allow the user to modify this feature on the Edit page.
