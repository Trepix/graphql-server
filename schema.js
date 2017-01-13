import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} from 'graphql/type';

let count = 0;

let schema;
schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                description: 'The count!',
                resolve: () => {
                    return count;
                }
            },
            name: {
                type: GraphQLString,
                description: 'This is My name',
                resolve: () => {
                    return "Hi my name is Trepix";
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Updates the count',
                resolve: function () {
                    count += 1;
                    return count;
                }
            }
        }
    })
});

export default schema;