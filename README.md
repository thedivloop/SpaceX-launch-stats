# Initialization

## Dependencies installation

```
npm i graphql express-graphql express axios
npm i -D nodemon
```

## Scripts

```javascript
"scripts": {
   "start": "node server.js",
   "server": "nodemon server.js"
 }
```

## Imports (require)

```javascript
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
```

## Express Skeleton

```javascript
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

## Running graphiql

When graphiql is set to **true** in the app.use(), the tool can be access on the host URI/graphiql.

### Examples of queries

**Get a specific launch based on the id**

```
{
  launch(id: "5eb87cddffd86e000604b32f") {
    name
    id
    date_utc
    fairings {
      reused
      recovery_attempt
      recovered
    }
  }
}
```

**Get launches**

```
{
  launches {
    name
    id
    fairings {
      reused
      recovery_attempt
      recovered
    }
  }
}
```

# Creating the FrontEnd

## Initialization

From the main folder:

```bash
npx create-react-app client
npm i concurrently
```

## Apollo GraphQL

```bash
npm install @apollo/client graphql
```

Modifications are required due to Apollo V3.

```javascript
const client = new ApolloClient({
  uri: "http://localhost:5000/grapql",
  cache: new InMemoryCache(),
});
```

# Links and references

https://github.com/graphql/express-graphql
https://github.com/r-spacex/SpaceX-API
https://www.apollographql.com/docs/react/get-started/

API V4: GET https://api.spacexdata.com/v4/launches/

## Videos

## Graphql Github

### Git commands

**Initialize git**

````bash
echo "# SpaceX-launch-stats" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:thedivloop/SpaceX-launch-stats.git
git push -u origin main```
````

**Remove node modules**

```
git rm -r --cached node_modules
```

**Add to .gitignore**

```
node_modules/
/client
```
