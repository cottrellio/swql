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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGNvdHRyZWxsL0RvY3VtZW50cy9BcHBzL3N3cWwvc3JjLyIsInNvdXJjZXMiOlsib2JqZWN0VHlwZXMvRmlsbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF5RTtBQUV6RSw0Q0FBNEQ7QUFHNUQsa0JBQWUsSUFBSSwyQkFBaUIsQ0FBQztJQUNuQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxLQUFLO0lBRWxCLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDYixFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsdUJBQWE7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLHdCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkQ7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsdUJBQWE7WUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVO1NBQ25DO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLHVCQUFhO1lBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYTtTQUN0QztRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSx1QkFBYTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFlBQVk7U0FDckM7UUFDRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtRQUM5QixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtRQUNqQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtLQUNsQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxMaXN0LCB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBnZXRJREZyb21VUkwsIGdldEFzc2V0QnlVUkwsIH0gZnJvbSAnLi4vcmVzb2x2ZXJzJztcbmltcG9ydCBQZXJzb25UeXBlIGZyb20gJy4vUGVyc29uJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0ZpbG0nLFxuICBkZXNjcmlwdGlvbjogJy4uLicsXG5cbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKGZpbG0pID0+IGdldElERnJvbVVSTCgnZmlsbXMnLCBmaWxtLnVybCksXG4gICAgfSxcbiAgICBlcGlzb2RlSWQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoZmlsbSkgPT4gZmlsbS5lcGlzb2RlX2lkLFxuICAgIH0sXG4gICAgb3BlbmluZ0NyYXdsOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKGZpbG0pID0+IGZpbG0ub3BlbmluZ19jcmF3bCxcbiAgICB9LFxuICAgIHJlbGVhc2VEYXRlOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKGZpbG0pID0+IGZpbG0ucmVsZWFzZV9kYXRlLFxuICAgIH0sXG4gICAgdGl0bGU6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgIGRpcmVjdG9yOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICBwcm9kdWNlcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gIH0pLFxufSk7XG4iXX0=