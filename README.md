disclaimer: project still in progress - assistance from GPT for some sections of the code
ConnectMe is a lightweight networking application that allows users to sign up, log in, and send messages to other users in a simple chat interface. It uses Node.js and Express for the backend and serves HTML pages for user interaction.

Features:
- User signup and login functionality
- Session-based authentication
- Message sending between users
- Simple front-end interface
- Works on localhost or can be deployed on platforms like Replit or Glitch

File structure:
/networking-app
  ├── /views
  │   ├── index.html          # Optional landing page
  │   ├── login.html          # Login form page
  │   ├── signup.html         # Signup form page
  │   ├── messages.html       # Message board page for sending and viewing messages
  ├── server.js               # Main server file that handles routes and server logic
  └── README.md               # This README file

Before you can run ConnectMe, make sure you have Node.js installed on your system. If not, download and install it from Node.js official site.

Clone this repository or download the files into your project folder:
git clone https://github.com/your-repo/connectme.git
cd connectme
Install the required dependencies:
npm install express body-parser express-session

How to Run Locally:
In your terminal, navigate to the folder containing the server.js file.
cd /path/to/networking-app
Start the Node.js server by running:
node server.js
Open your browser and go to http://localhost:3000 to use the app.


You can also run this app on online compilers such as Replit or Glitch:
Create a new project on Replit or Glitch.
Copy the contents of the server.js file and the /views folder into your project.
Start the server and open the app in the browser provided by the platform.


Usage:
Sign Up: Go to /signup to create a new account.
Login: Once signed up, users can log in at /login.
Send Messages: After logging in, navigate to the /messages page to view and send messages to all users.
Logout: To log out, click the logout link on the messages page
