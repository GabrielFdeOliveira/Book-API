I was forced to make significant changes to three components, namely Home, Favourites, and Card. Initially, I attempted to store the books added to the favourites array in a state within the Card component, as well as in local storage. However, I encountered an issue where the array was being overridden every time a new book was added.

Next, I moved the state and logic to the Favourites page, but the function was never triggered on click. Despite ensuring that all properties were being passed correctly by the parent element, and that the typing was updated, the problem persisted.

For my third approach, I returned to the Card component, but this time, I based everything on local storage and scrapped the previous state I was using. It took me some time to understand how the "newFavourite" parameter should be used to replace the old values stored there, but eventually, it worked.

Initially, I attempted to initialize a variable to hold whatever was present in the local storage, then spread it and add the newFavourite. However, this resulted in a string that accumulated new items on every call. Ultimately, the best approach was to use the .push method.
