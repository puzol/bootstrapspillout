# bootstrapspillout
Easy overflow of elements from inside the conainer to the edge of the window.

---Bootstrap Spillout - BSS---

--Thinking outside of the box--
- Container bound content that reaches the edge of the viewport made easy 

---What is the use-case?---

 One of the common designer tropes is to have regular content be bound withing the container 
but to have images break out of the container and reaching the end of the screen.

While it looks nice and helps break the monotiny of having everything centered on the screen 
within the container, it poses a bit of a challange on the development side. 


---Common solutions---

 One option is to set the spilling element absolutely within the container or a column inside 
the container.

The issue with this approach is having to compensate for the fact that the absolutely placed 
element is no longer in the document flow and it's height does not effect the parent element. 

-------------------------------------------------------------------------------------------------

An another option is to us JS to add a negative margin to the desired element.

To avoid complication and for the sake of performance it is best to keep the js visual 
adjustemnts to a minimum. 

-------------------------------------------------------------------------------------------------

One other option is to stretch the container to the desired edge of the screen but that offsets 
the center of the container which in turn missaligns the rest of the grid. 


---The benefits of Boostrap-Spillout---

 BSS allows you to both keep the existing grid intact while retaining the ease of use or regular 
columns via classes and remaining in the flow of the document and using minimal JS.

BSS folows Bootstrap's responsive mixin approach and can be disabled at any breakpoint. 

---How to use---
Include the BSS scss to your main style scss after the Bootstrap scss since it uses Bootstrap's 
scss variables and compile it.

Include the BSS JS to your project and add bssInit() to the top of your 
window.onload / document.ready function. 

Example class: .spill-md-6-end

- The main part and the starting point is 'spill' which takes a similar role and function 
as 'col'. 
- The second part is the breakpoint designator (sm, md, lg, etc.) just like with Bootstrap.
If the breakpoint is not included, the element will behave the same throughout all of the 
breakpoints.
- The third part is the number of columns of the regular container the spill element 
will take up. 
- The final part is the side designator.
It can be either 'start', 'end' or 'none'.
The 'none' designator makes the spill element act like a regular column. 
