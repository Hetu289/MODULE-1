When a user requests a webpage the browser resolves the domain name (DNS), establishes a reliable connection with the server (TCP handshake), sends the application request (HTTP), the request is split into IP packets that travel across routers and ISPs to the server, the server responds, and the browser reassembles and displays the response.

Text diagram :

[User's Device / Browser]
        |
   (1) Enter URL or click link
        |
   (2) DNS Lookup (cache -> recursive resolver -> root/TLD -> authoritative)
        |
   (3) IP address returned
        |
   (4) TCP 3-way handshake (SYN -> SYN/ACK -> ACK)
        |
   (5) HTTP request sent (split into TCP segments → IP packets)
        |
   [Network: LAN router] -> [ISP] -> [Regional backbone routers] -> ... -> [Destination Data Center/router]
        |
   (6) Server receives packets, reassembles, processes request (application layer)
        |
   (7) Server sends response (HTTP) back (TCP: ACKs, retransmits if needed)
        |
   (8) Client receives, TCP reassembles bytes → browser renders page
        |
   (9) Connection termination (FIN/ACK) or keep-alive for more requests

Step-by-step explanation

User action (URL or click).
The browser begins the process when the user types a URL or clicks a link. The browser first checks its own cache for DNS and HTTP cache entries. 
cycle.io

DNS lookup (resolve domain → IP).
If the browser doesn’t have the IP cached it asks a recursive DNS resolver (usually the ISP or a public resolver). That resolver may query root servers → TLD servers → authoritative name server to get the IP address for the hostname. The IP is returned to the browser. 
Cloudflare
cycle.io

Transport layer: TCP three-way handshake.
For a reliable connection (HTTP over TCP) the client and server perform the TCP three-way handshake (SYN, SYN/ACK, ACK) to establish connection parameters and sequence numbers. Only after the handshake is the connection "ESTABLISHED" and data transfer can start. 
GeeksforGeeks
Microsoft Learn

Send the HTTP request (application layer → transport layer → network layer).
The browser forms an HTTP request (GET/POST + headers). TCP divides this data into segments; IP packs segments into IP packets and adds source/destination IP addresses. Packets may be fragmented to fit the MTU of links. 
GitBook
Wikipedia

Routing through the internet (links, routers, ISPs, backbone).
Each IP packet is handed to the local network (Wi-Fi/Ethernet), sent to the local router, forwarded to the ISP, and travels through multiple routers across regional and backbone networks. Routers choose the next hop using routing tables and protocols (BGP, OSPF, etc.). Packets can take different routes and arrive out of order. 
GeeksforGeeks
Lifewire

Server receives, reassembles, and processes request.
The server’s network stack reassembles TCP segments in order (using sequence numbers), checks for missing data (requests retransmission if necessary), then the server’s HTTP server (application layer) handles the request and produces a response. 
Wikipedia

Server response and acknowledgements.
The server sends the HTTP response back in TCP segments and IP packets. The client’s TCP stack acknowledges receipt of bytes (ACKs). TCP ensures reliability (retransmit lost segments, reorder out-of-order segments). 
Wikipedia

Browser renders the page.
Once the browser has the response body (HTML), it parses the HTML, fetches referenced resources (CSS/JS/images — which may cause new DNS lookups and connections), executes scripts, and renders the page to the screen.

Connection teardown / keep-alive.
The TCP connection can be kept alive for additional requests (HTTP persistent connections) or closed via a FIN/ACK sequence. TCP also uses timeouts and state transitions to free resources.

