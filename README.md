# React 
- how to create a hello world code in react by comparing HTML and JavaScript

- IF it execuete the code we must have CDN links of React and ReactDOM

- React is used to create the element of object ,which consists of tags,empty object at initialization in that we store attributes of the object,Children.

- ReactDOM is used to render the object in the browser , what we write in tag and attribute.

- ReactElement(Object) => HTML(Browser understand)

# Parcel
- Dev build
- local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification of File
- Bundling the files
- Compress the file(according to size)
-  Consistent hashing
- Code Splitting 
- Differential Bundling - Support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking algorithm - remove unused code for you
- Different dev and Prod bundles

# Food App
 *  Header 
 *  - logo
 *  - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - Restaurant Cards
    - images
 * Footer
 *  - Links
 *  - Address
 *  -Contact


There are two types of Export/ Import

- Default Export/Import

export default Components/variables

import component from "path";

- named Export/Import

export const component;
import {component} from "path";


# React Hooks 
- Hooks is just a normal JS utility functions.
- They are two types of Hooks 
   * useState() - It uses for Super powerful State variable in React
   Ex:-
   * useEffect() -it has two parameters those are 
   callback function and optional arguments.


- When never State Variables update React triggers a reconciliation cycle(re-renders the component) 


# React Routing
- they are two types of routing in web app
   * client side routing - it can render only components inside the web app
   * Server Side routing - it can reload an entire web app to enter into the next page or componenet