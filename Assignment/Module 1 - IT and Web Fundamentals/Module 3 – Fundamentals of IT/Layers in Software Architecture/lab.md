Explain with the case Study : Online Library Management System


1. Presentation Layer (User Interface Layer)

Functionality:

  * Provides the interface for users (students, librarians, admin).
  * Users can **search books, issue books, view account details**.
  * Built using **HTML, CSS, JavaScript, React**.

Example in System:

  * A student opens the **"Search Book" page** and types the book title.
  * The UI captures this input and sends it to the business logic layer.


2. Business Logic Layer (Application Layer)

Functionality:

  * Acts as the **middleman** between UI and database.
  * Applies **rules and logic** of the system.
  * Built using **Java, C#, Node.js, Python (Django/Flask)**.

Example in System:

  * Receives the book title from the UI.
  * Checks if the user is logged in.
  * Sends a query to the data access layer to find books that match.


3. Data Access Layer (Database Layer)

Functionality:

  * Handles **storage and retrieval** of data.
  * Uses databases like **MySQL, Oracle, MongoDB**.
  * Ensures **security, integrity, and consistency** of data.

Example in System:

  * Retrieves book details (title, author, availability) from the database.
  * Sends the result back to the business logic layer.

Example: Searching for a Book

1. Presentation Layer:Student enters *“Data Structures”* in the search bar.
2. Business Logic Layer: Validates request, prepares SQL query.
3. Data Access Layer: Executes query → finds 5 matching books.
4. Business Logic Layer: Formats results and sends them back.
5. Presentation Layer: Displays book list to the student.


diagram :

[ Presentation Layer: Search Book UI ] 
              
[ Business Logic Layer: Validates + Creates Query ]
              
[ Data Access Layer: Fetches Book Data from DB ]

