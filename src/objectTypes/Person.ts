import { GraphQLObjectType, GraphQLString, GraphQLList, } from 'graphql';

import FilmType from './Film';
import { getIDFromURL, getAssetByURL, } from '../resolvers';

export default new GraphQLObjectType({
  name: 'Person',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (person) => getIDFromURL('people', person.url),
    },
    hairColor: {
      type: GraphQLString,
      resolve: (person) => person.hair_color,
    },
    skinColor: {
      type: GraphQLString,
      resolve: (person) => person.skin_color,
    },
    birthYear: {
      type: GraphQLString,
      resolve: (person) => person.birth_year,
    },
    name: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    gender: { type: GraphQLString },

    films: {
      type: new GraphQLList(FilmType),
      resolve: (person) => person.films.map(getAssetByURL),
    }
  }),
});
