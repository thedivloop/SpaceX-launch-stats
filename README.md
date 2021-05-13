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

**Get a launches**

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

# Links and references

https://github.com/graphql/express-graphql
https://github.com/r-spacex/SpaceX-API

API V4: GET https://api.spacexdata.com/v4/launches/

## Videos

## Graphql Github

### Git commands

````bash
echo "# SpaceX-launch-stats" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:thedivloop/SpaceX-launch-stats.git
git push -u origin main```
````
