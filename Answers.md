1.  Explain the differences between `client-side routing` and `server-side routing`.
- In server-side routing, each time a user or visitor wants to visit another web page from a web page or application, the website requests that information from a server. The server then considers the request from the page and then sends back a document, html file, file, etc. to the browser in order to allow the browser to render that page. A key side effect of this process is that each time a user goes to a different URL, a completely fresh page is sent from the server to the browser for render.

- In client-side routing, JavaScript code within a browser manages data in memory for an application so that server requests do not have to be so frequent. Most information is loaded into memory at initial load and used to populate pages when a user needs that information. Since the server doesn't have to send over a new page each time a user goes to a new URL, the browser doesn't need to refresh each time a new page is accessed. If additional information is needed, an API request can be made using HTTP protocol to request data in the form of JSON.

2.  What does HTTP stand for?
- HTTP stands for HyperText Transfer Protocol - a set of rules that dictate interactions between a web client and a server.

3.  What does CRUD stand for?
- CRUD stands for Create, Read, Update, and Delete. These methods are key parts of HTTP (described above)

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- Create : POST
- Read : GET
- Update : PUT
- Delete : DELETE

5.  Mention three tools we can use to make AJAX requests
- Three tools we can use to make AJAX requests are the following: 
1. A request (via axios or fetch)
2. .then() -- allows us to handle what should happen if the request is successful
3. .catch() -- allows us to handle what should happen if there is an error with the request