Template for NodeJS Express Typescript project to support Swagger API & Mongo CRUD
# 1. Using the template
## Initialize
Clone the repository from github then run the command
```bash
npm install
```
## Commands
```bash
# Run development server with hot-loader (running in background)
npm start

# Build production release (output to /bin)
npm run release
```
# 2. Create the template
```bash
# Init package json
npm init -y

# Install all dev tools
npm install --save-dev typescript ts-node nodemon @types/debug @types/node @types/express

# Install express
npm install --save express

# Create tsconfig.json
node ./node_modules/typescript/lib/tsc --init
{
  "compilerOptions": {
    "target": "es6",
    "sourceMap": true
  },
  "include": [
    "server/**/*.ts"
  ]
}

# Edit package.json to add startup scripts
..
"scripts": {
    "start": "./node_modules/.bin/nodemon --watch server/**/*.ts --exec .\\node_modules\\.bin\\ts-node server/app.ts"
}
..
```
