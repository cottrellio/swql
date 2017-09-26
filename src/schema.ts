import fetch from 'node-fetch';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, } from 'graphql';

import PersonType from './objectTypes/Person';
import FilmType from './objectTypes/Film';

const BASE_URL = 'http://swapi.co/api';

async function getAssetByURI(uri: string) {
  const res = await fetch(`${BASE_URL}${uri}`);
  const json = await res.json();

  return json;
}

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
