"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const resolvers_1 = require("../resolvers");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Film',
    description: '...',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLString,
            resolve: (film) => resolvers_1.getIDFromURL('films', film.url),
        },
        episodeId: {
            type: graphql_1.GraphQLString,
            resolve: (film) => film.episode_id,
        },
        openingCrawl: {
            type: graphql_1.GraphQLString,
            resolve: (film) => film.opening_crawl,
        },
        releaseDate: {
            type: graphql_1.GraphQLString,
            resolve: (film) => film.release_date,
        },
        title: { type: graphql_1.GraphQLString },
        director: { type: graphql_1.GraphQLString },
        producer: { type: graphql_1.GraphQLString },
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGNvdHRyZWxsL0RvY3VtZW50cy9BcHBzL3N3cWwvc3JjLyIsInNvdXJjZXMiOlsib2JqZWN0VHlwZXMvRmlsbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF5RTtBQUV6RSw0Q0FBNEQ7QUFNNUQsa0JBQWUsSUFBSSwyQkFBaUIsQ0FBQztJQUNuQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxLQUFLO0lBRWxCLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDYixFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsdUJBQWE7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLHdCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkQ7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsdUJBQWE7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVO1NBQ25DO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLHVCQUFhO1lBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYTtTQUN0QztRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSx1QkFBYTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFlBQVk7U0FDckM7UUFDRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtRQUM5QixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtRQUNqQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtLQUNsQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxMaXN0LCB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBnZXRJREZyb21VUkwsIGdldEFzc2V0QnlVUkwsIH0gZnJvbSAnLi4vcmVzb2x2ZXJzJztcbmltcG9ydCBQZXJzb25UeXBlIGZyb20gJy4vUGVyc29uJztcblxuLyoqXG4gKiBGaWxtIG9iamVjdCB0eXBlIGRlZmluaXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdGaWxtJyxcbiAgZGVzY3JpcHRpb246ICcuLi4nLFxuXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6IChmaWxtKSA9PiBnZXRJREZyb21VUkwoJ2ZpbG1zJywgZmlsbS51cmwpLFxuICAgIH0sXG4gICAgZXBpc29kZUlkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKGZpbG0pID0+IGZpbG0uZXBpc29kZV9pZCxcbiAgICB9LFxuICAgIG9wZW5pbmdDcmF3bDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6IChmaWxtKSA9PiBmaWxtLm9wZW5pbmdfY3Jhd2wsXG4gICAgfSxcbiAgICByZWxlYXNlRGF0ZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6IChmaWxtKSA9PiBmaWxtLnJlbGVhc2VfZGF0ZSxcbiAgICB9LFxuICAgIHRpdGxlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBkaXJlY3RvcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgcHJvZHVjZXI6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICB9KSxcbn0pO1xuIl19