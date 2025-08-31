Design a simple HTTP client-server communication in any language.

Hello, this is the server!

// SimpleHttpServer.java
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleHttpServer {
    public static void main(String[] args) throws Exception {
        // Create server at port 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // Define a context (path) and handler
        server.createContext("/", new MyHandler());

        // Start the server
        server.setExecutor(null);
        System.out.println("Server running at http://localhost:8080/");
        server.start();
    }

    // Handler for client requests
    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) {
            try {
                String response = "Hello, this is the server!";
                exchange.sendResponseHeaders(200, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

Java HTTP Client :

The client will send a request to the server and display the response.

// SimpleHttpClient.java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SimpleHttpClient {
    public static void main(String[] args) {
        try {
            // Connect to server
            URL url = new URL("http://localhost:8080/");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            // Request method
            con.setRequestMethod("GET");

            // Read response
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // Print output
            System.out.println("Response Code: " + con.getResponseCode());
            System.out.println("Response from Server: " + response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}



How It Works :

Run SimpleHttpServer.java → starts a server on http://localhost:8080/.

Run SimpleHttpClient.java → sends a GET request to the server.

Server responds → "Hello, this is the server!".

Client prints → response code 200 and message.