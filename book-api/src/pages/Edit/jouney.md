I was unable to access the "state" property of the "location" object in my code. I attempted to create a "CustomLink" component with custom types and configurations, as well as using the default "Link" component, but both approaches resulted in the "state" property arriving as undefined.

I tested the "CustomLink" component on its own and confirmed that it was indeed sending the "state" property with the correct data that I needed. However, for some reason, it arrives as "null" in the "Edit" page. The other properties of the object are being passed correctly.

Also tested the "book" object at the FavouriteCard component and it hold the data I was expecting it too, now I just can't think in nothing else to try.
