"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Person_1 = require("./objectTypes/Person");
const Film_1 = require("./objectTypes/Film");
const resolvers_1 = require("./resolvers");
const QueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
        person: {
            type: Person_1.default,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => resolvers_1.getAssetByURI(`/people/${args.id}/`),
        },
        film: {
            type: Film_1.default,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => resolvers_1.getAssetByURI(`/films/${args.id}/`),
        }
    }),
});
exports.default = new graphql_1.GraphQLSchema({
    query: QueryType,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kY290dHJlbGwvRG9jdW1lbnRzL0FwcHMvc3dxbC9zcmMvIiwic291cmNlcyI6WyJzY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBd0Y7QUFFeEYsaURBQThDO0FBQzlDLDZDQUEwQztBQUMxQywyQ0FBNkM7QUFLN0MsTUFBTSxTQUFTLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztJQUN0QyxJQUFJLEVBQUUsT0FBTztJQUNiLFdBQVcsRUFBRSxLQUFLO0lBRWxCLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDYixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsZ0JBQVU7WUFDaEIsSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO2FBQzVCO1lBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyx5QkFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLGNBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7YUFDNUI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLHlCQUFhLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDN0Q7S0FDRixDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsSUFBSSx1QkFBYSxDQUFDO0lBQy9CLEtBQUssRUFBRSxTQUFTO0NBQ2pCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB7IEdyYXBoUUxTY2hlbWEsIEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTGlzdCwgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IFBlcnNvblR5cGUgZnJvbSAnLi9vYmplY3RUeXBlcy9QZXJzb24nO1xuaW1wb3J0IEZpbG1UeXBlIGZyb20gJy4vb2JqZWN0VHlwZXMvRmlsbSc7XG5pbXBvcnQgeyBnZXRBc3NldEJ5VVJJLCB9IGZyb20gJy4vcmVzb2x2ZXJzJztcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBxdWVyeWFibGUgZmllbGRzIGZvciBlYWNoIG9iamVjdCB0eXBlLlxuICovXG5jb25zdCBRdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnUXVlcnknLFxuICBkZXNjcmlwdGlvbjogJy4uLicsXG5cbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIHBlcnNvbjoge1xuICAgICAgdHlwZTogUGVyc29uVHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IChyb290LCBhcmdzKSA9PiBnZXRBc3NldEJ5VVJJKGAvcGVvcGxlLyR7YXJncy5pZH0vYCksXG4gICAgfSxcbiAgICBmaWxtOiB7XG4gICAgICB0eXBlOiBGaWxtVHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IChyb290LCBhcmdzKSA9PiBnZXRBc3NldEJ5VVJJKGAvZmlsbXMvJHthcmdzLmlkfS9gKSxcbiAgICB9XG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMU2NoZW1hKHtcbiAgcXVlcnk6IFF1ZXJ5VHlwZSxcbn0pO1xuIl19