This was the first component I created, here I will list the blockers I found and the approaches I took to tackle them.

1- Make the icon's background to be 100% of the navbar width:

- I initially had the icons as <li> elements and was planning to add onClick features to them, but the background color insisted to cover only the icon's width. To avoid that I have wrapped the icons inside <button> elements, removed their borders and the final touch was to make the background transparent, so it could apply the gradient effect when active.

2- Change the profile picture background:

- Following the wireframe, the pic should have a different background color, my initial attempt was to add background color on the .profileImage class, and the second one was to add an extra (.profileBackground) class on the same element and add the background there. I finally managed to do it by adding an extra div wrapping the <img>.

3- The icon elements when active:

- This one was tricky because the first icon does not have an <hr> element below it on the wireframe, so it behaves differently than the others when active. The best I managed to come up with was to add an extra class and make it invisible, but it's still not ideal. I could not use the "transform: scale()" property as it changed the whole icon's size and the wireframe only indicated a bigger width.
