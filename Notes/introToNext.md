# Files in next app
    - _app.tsx represents our entire app every component that we create will be a child of app.tsx
    - index.tsx represents everything that is on the webpage



    -Styles: is for css obviously 
    - Public Directory: is for images or static resources 
    - Pages -> API: hello.ts is for making request for data
    - Pages -> index.tsx is like app.js in CRA 

# Writing what I would to refer to as components:
    - In Pages create new folders for each component and files inside for those components function name does NOT have to match file name in next
    - in _document.tsx you can add stuff that you want on the whole app (on every route) like a nav see example in first-next-app
    
# Pre Rendering:
    - By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO
    - Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
# Two Forms of Pre-rendering
    - Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
    - Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering is the pre-rendering method that generates the HTML on each request.

# Components with typescript
    - When we make typescript components in react we create types for each component and these types specify which props need to be passed to that component this ensures we pass everything we need to this component and this helps us avoid bugs and crashes
    - React.fc is just the type of a functional component 
# Left off @ 34:00 min in reddit clone free code camp