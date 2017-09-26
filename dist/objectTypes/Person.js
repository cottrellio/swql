"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Film_1 = require("./Film");
const resolvers_1 = require("../resolvers");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Person',
    description: '...',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLString,
            resolve: (person) => resolvers_1.getIDFromURL('people', person.url),
        },
        hairColor: {
            type: graphql_1.GraphQLString,
            resolve: (person) => person.hair_color,
        },
        skinColor: {
            type: graphql_1.GraphQLString,
            resolve: (person) => person.skin_color,
        },
        birthYear: {
            type: graphql_1.GraphQLString,
            resolve: (person) => person.birth_year,
        },
        name: { type: graphql_1.GraphQLString },
        height: { type: graphql_1.GraphQLString },
        mass: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        films: {
            type: new graphql_1.GraphQLList(Film_1.default),
            resolve: (person) => person.films.map(resolvers_1.getAssetByURL),
        }
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kY290dHJlbGwvRG9jdW1lbnRzL0FwcHMvc3dxbC9zcmMvIiwic291cmNlcyI6WyJvYmplY3RUeXBlcy9QZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBeUU7QUFFekUsaUNBQThCO0FBQzlCLDRDQUE0RDtBQUU1RCxrQkFBZSxJQUFJLDJCQUFpQixDQUFDO0lBQ25DLElBQUksRUFBRSxRQUFRO0lBQ2QsV0FBVyxFQUFFLEtBQUs7SUFFbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNiLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSx1QkFBYTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssd0JBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUN4RDtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSx1QkFBYTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFVBQVU7U0FDdkM7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsdUJBQWE7WUFDbkIsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxVQUFVO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLHVCQUFhO1lBQ25CLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsVUFBVTtTQUN2QztRQUNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO1FBQzdCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO1FBQy9CLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO1FBQzdCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO1FBRS9CLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxJQUFJLHFCQUFXLENBQUMsY0FBUSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5QkFBYSxDQUFDO1NBQ3JEO0tBQ0YsQ0FBQztDQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTGlzdCwgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IEZpbG1UeXBlIGZyb20gJy4vRmlsbSc7XG5pbXBvcnQgeyBnZXRJREZyb21VUkwsIGdldEFzc2V0QnlVUkwsIH0gZnJvbSAnLi4vcmVzb2x2ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogJ1BlcnNvbicsXG4gIGRlc2NyaXB0aW9uOiAnLi4uJyxcblxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAocGVyc29uKSA9PiBnZXRJREZyb21VUkwoJ3Blb3BsZScsIHBlcnNvbi51cmwpLFxuICAgIH0sXG4gICAgaGFpckNvbG9yOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKHBlcnNvbikgPT4gcGVyc29uLmhhaXJfY29sb3IsXG4gICAgfSxcbiAgICBza2luQ29sb3I6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAocGVyc29uKSA9PiBwZXJzb24uc2tpbl9jb2xvcixcbiAgICB9LFxuICAgIGJpcnRoWWVhcjoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6IChwZXJzb24pID0+IHBlcnNvbi5iaXJ0aF95ZWFyLFxuICAgIH0sXG4gICAgbmFtZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgaGVpZ2h0OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBtYXNzOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBnZW5kZXI6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuXG4gICAgZmlsbXM6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChGaWxtVHlwZSksXG4gICAgICByZXNvbHZlOiAocGVyc29uKSA9PiBwZXJzb24uZmlsbXMubWFwKGdldEFzc2V0QnlVUkwpLFxuICAgIH1cbiAgfSksXG59KTtcbiJdfQ==