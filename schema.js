const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLList,
    GraphQLSchema
} = require('graphql');
const axios = require('axios');


// Launch type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt },
        name: {type: GraphQLString },
        date_utc: {type: GraphQLString },
        date_local: {type: GraphQLString },
        success: {type: GraphQLBoolean },
        fairings: { type: FairingType},
        id: {type: GraphQLString}
    })
});



// Fairing Type

const FairingType = new GraphQLObjectType({
    name: 'Fairing',
    fields: () => ({
        reused: {type: GraphQLBoolean },
        recovery_attempt: {type: GraphQLBoolean },
        recovered: {type: GraphQLBoolean }

    })
});

// Rocket Type

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString },
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields : {
        launches : {
            type: new GraphQLList(LaunchType),
            resolve (parent,args) {
                return axios.get('https://api.spacexdata.com/v4/launches/')
                    .then(res => res.data);
            }
        },
        launch : {
            type: LaunchType,
            args: {
                id: {type: GraphQLString},
                //flight_number: {type: GraphQLInt}
            },
            resolve(parent,args) {
                return axios
                    .get(`https://api.spacexdata.com/v4/launches/${args.id}`)
                    .then(res => res.data);
            }
        },
        rockets : {
            type: new GraphQLList(RocketType),
            resolve (parent,args) {
                return axios.get('https://api.spacexdata.com/v4/rockets/')
                    .then(res => res.data);
            }
        },
        rocket : {
            type: RocketType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent,args) {
                return axios
                    .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});