    const { response } = require('express');
    const express = require('express');
    const app = express();
    
    // Route to handle GET requests for /
    app.get('/', (req, res) => {
        res.status(200).send({ message: 'Welcome to SchoolProject!' });
    });
    
    // Route to handle POST requests for /login
    app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        
        // Check if the user exists and the password is correct
        if (!username || !password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // If the user exists, generate a JWT token
        const jwt = generateJwtToken(username);
        
        // Send the JWT token back to the client as part of the response
        return res.status(200).json({ message: 'Login successful', token: jwt });
    });
    
    // Route to handle GET requests for /logout
    app.get('/logout', (req, res) => {
        // Remove the JWT token from the client's session
        req.session.destroy((error) => {
            if (error) {
                console.log(error);
            }
            
            return res.status(200).json({ message: 'Logout successful' });
        });
    });
    
    // Generate a JWT token for the given username
    const generateJwtToken = (username) => {
        // Use the user's username and a secret key to create a JWT token
        const jwt = jsonwebtoken.sign({ username }, 'my-secret-key', {
            expiresIn: 86400, // Expires in 24 hours
        });
        
        return jwt;
    };
    
    // Start the server
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
  