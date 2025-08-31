Client–Server Communication

Definition:

Client–server communication is a model where one device (client) requests data or services, and another device (server) provides the requested data or service.

This is the foundation of how the web, apps, and online systems work.

Roles :

1. Client

A client is the user-side device or application (like a browser, mobile app, or desktop app).

It sends requests to the server (e.g., “Give me Google’s homepage”).

Examples:

Web browser (Chrome, Firefox)

Mobile app (WhatsApp client)

Online game software

2. Server

A server is a powerful computer or program that waits for client requests.

It processes requests and sends back responses.

Examples:

Web server (Apache, Nginx)

Mail server (Gmail server)

Database server (MySQL, Oracle)

Steps of Communication (Example: Opening www.google.com)

Client Request

You type www.google.com in your browser (client).

Browser sends an HTTP request to Google’s server.

Server Processing

Google’s web server receives the request.

It processes it (fetches the homepage HTML from database/files).

Server Response

The server sends back an HTTP response with the homepage content.

Client Display

Your browser (client) renders the page and shows Google’s homepage.

Diagram (Text Representation)

CLIENT (Browser)                   SERVER (Web Server)
-------------------------------------------------------
User requests "www.google.com" ---> Receives request
                                   Processes request
<--- Sends back homepage (HTML) --- Returns response

Browser displays Google page

In short:

Client = asks for something

Server = provides what is asked

Communication happens using protocols like HTTP, HTTPS, FTP, SMTP.