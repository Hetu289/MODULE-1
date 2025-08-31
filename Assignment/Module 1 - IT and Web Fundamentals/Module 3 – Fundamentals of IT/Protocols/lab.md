
1. Simulating HTTP Requests with `curl`

Example: GET request

curl http://example.com

* Sends an **HTTP GET** request to `example.com`
* Returns the **HTML content** of the webpage.


Example: GET request with headers

curl -v http://example.com

* `-v` (verbose) shows full request and response headers.
* You’ll see details like `HTTP/1.1 200 OK`, content type, etc.


Example: POST request


curl -X POST -d "username=divyaraj&password=1234" http://example.com/login


* Sends a **POST** request with form data (username & password).
* Commonly used to simulate login or form submission.


2. Simulating FTP Requests with `curl`

Example: Download a file from FTP server


curl ftp://ftp.example.com/file.txt -o file.txt


Downloads `file.txt` from the FTP server to your local machine.


Example: FTP with username & password

curl -u myuser:mypassword ftp://ftp.example.com/file.txt -o file.txt


 `-u` provides login credentials for FTP access.


Example: Upload a file to FTP server

curl -T localfile.txt -u myuser:mypassword ftp://ftp.example.com/

-T uploads `localfile.txt` to the FTP server.

HTTP with curl → Test web requests (GET, POST, headers).
FTP with curl → Upload/download files from FTP servers.