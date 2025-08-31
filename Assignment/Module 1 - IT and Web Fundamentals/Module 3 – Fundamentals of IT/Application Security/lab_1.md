1. SQL Injection (SQLi)

What it is:

* An attacker injects **malicious SQL queries** into input fields (like login forms) to access or modify the database.
* Example:

  SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';


  → This could allow login **without a valid password**.

Solution:

* Use **Prepared Statements / Parameterized Queries** instead of string concatenation.
* Example (Java):

  PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username=? AND password=?");
  stmt.setString(1, username);
  stmt.setString(2, password);
* Validate and sanitize all user inputs.


2. Cross-Site Scripting (XSS)

What it is:

* An attacker injects **malicious JavaScript** into a website.
* Example: Posting a comment like:

  <script>alert('Hacked!');</script>

  → Runs in other users’ browsers.

Solution:

* Escape output before displaying it on web pages.
* Use frameworks/libraries that automatically escape inputs (like React, Angular).
* Implement a **Content Security Policy (CSP)** to restrict script execution.


3. Cross-Site Request Forgery (CSRF)

What it is:

* An attacker tricks a logged-in user into unknowingly performing actions (like money transfer or password change).
* Example: Clicking a malicious link that automatically sends a request:

  <img src="http://bank.com/transfer?amount=1000&to=attacker" />
  

Solution:

* Use **CSRF tokens** in forms and requests.
* Require **re-authentication** for critical actions (like password changes).
* Use **SameSite cookies** to prevent automatic cross-site requests.
