# Penn Labs Frontend Challenge

# -------------LIST OF FEATURES I IMPLEMENTED-------------

## Features

I included these main features: --------------------------
Explore Courses, Add courses to your cart, View cart.
The details of all the features are listed below within each main feature.

Additional Features: ------------------------------------
Typescript, getting receipt upon checking out. animations for viesing the courses and cart, letting users rank the courses in the cart, take advantage of a linter, error-handling. All these 6 additional features are listed in the last section.

1. **Explore courses**

   - If you view `src/components/Courses.js`, you'll see that it is rendering _some_ of the courses data from `src/data/courses.json`
   - filter or sort courses by particular properties such as keywords in course descriptions, prerequisites etc.

2. **Add courses to your cart**
   - To see the full description of the course, user can click on the course card in the list.
   - A user is able to add a subset of these courses to their cart.
     - The user is be able to add more than 7 courses to their cart.
   - When a user adds a course, this addition is reflected in:
     1. How that cart is rendered
     2. How that course is rendered
     - For example, there is not a button to add that course to the cart.

3. **View cart and checkout**

   - The user is able to click a button to view their cart.
     - If the cart has no items in it, user sees that their cart is empty.
     - If the cart has courses in it, courses and relevant information about them are displayed.
   - When there are courses in the cart, user is able to change the order of courses by clicking the up  and down arrows next to course titles. 
   - When the user is satisfied with their course cart, they are able to "checkout"
     - This will either take the user to a new page containing a "receipt" containing the courses which they checked out with.



## Time Spent
I have spent approximately 6 hours on the project.


4. **Additional features**
#  ---------ADDITIONAL FEATURES THAT I IMPLEMENTED----------

  1. Add Typescript ([https://create-react-app.dev/docs/adding-typescript/](https://create-react-app.dev/docs/adding-typescript/)) to your application. Kudos if you turn on `strictNullChecks` and `noImplicitAny`!
  2. Allow users to "checkout" their current cart, which takes the user to a new page (React Router/next.js could be useful here!) containing a "receipt" with the courses they checked out with.
  3. Add animations for adding and viewing courses and the cart
  4. Let users rank courses in order of preference
  5. Thinking about code quality: take advantage of a [linter](https://eslint.org/).
  6. Error-handling, edge-cases, and error messages.








