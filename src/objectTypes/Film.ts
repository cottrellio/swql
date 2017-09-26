import { GraphQLObjectType, GraphQLString, GraphQLList, } from 'graphql';

import { getIDFromURL, getAssetByURL, } from '../resolvers';
import PersonType from './Person';

/**
 * Film object type definition.
 */
export default new GraphQLObjectType({
  name: 'Film',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (film) => getIDFromURL('films', film.url),
    },
    episodeId: {
      type: GraphQLString,
      resolve: (film) => film.episode_id,
    },
    openingCrawl: {
      type: GraphQLString,
      resolve: (film) => film.opening_crawl,
    },
    releaseDate: {
      type: GraphQLString,
      resolve: (film) => film.release_date,
    },
    title: { type: GraphQLString },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
  }),
});
