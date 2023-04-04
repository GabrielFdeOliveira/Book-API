I was unable to access the "state" property of the "location" object in my code. I attempted to create a "CustomLink" component with custom types and configurations, as well as using the default "Link" component, but both approaches resulted in the "state" property arriving as undefined.

I tested the "CustomLink" component on its own and confirmed that it was indeed sending the "state" property with the correct data that I needed. However, for some reason, it arrives as "null" in the "Edit" page. The other properties of the object are being passed correctly.

Also tested the "book" object at the FavouriteCard component and it hold the data I was expecting it too, now I just can't think in nothing else to try. I even tried to overhaul the whole routing system in Vite. I got rid of the App.tsx file and changed it to use createBrowserROuter, but unfortunately, this did not yield any positive results. The issue persists, and I'm still unable to properly access the location state in the Edit page.

After trying a different approach, I was able to successfully send the book constant to the Edit page by utilizing the useContext hook. First, I created a context with dummy data and imported it into the FavouriteCard. I then replaced the dummy data with the value present in the book constant and passed it on to the Edit page.

To update the values of price and rating, I created three functions. Two of these functions capture the input values while the third one updates the variable held in the local storage.
