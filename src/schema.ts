import fetch from 'node-fetch';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, } from 'graphql';

import PersonType from './objectTypes/Person';
import FilmType from './objectTypes/Film';
import { getAssetByURI, } from './resolvers';

/**
 * Defines the queryable fields for each object type.
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => getAssetByURI(`/people/${args.id}/`),
    },
    film: {
      type: FilmType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => getAssetByURI(`/films/${args.id}/`),
    }
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
