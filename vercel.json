{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/npm-build",
      "config": {
        "distDir": "client/build"
      }
    },
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/client/build/$1"
    },
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    }
  ],
  "env": {
    "MONGO_URI": "mongodb+srv://areebasyed822:gulerana3711@cluster0.jkg8i.mongodb.net/ecommerce?retryWrites=true&w=majority",
    "PORT": "8080"
  }
}
