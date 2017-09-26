"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const graphql_1 = require("graphql");
const Person_1 = require("./objectTypes/Person");
const Film_1 = require("./objectTypes/Film");
const BASE_URL = 'http://swapi.co/api';
function getAssetByURI(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield node_fetch_1.default(`${BASE_URL}${uri}`);
        const json = yield res.json();
        return json;
    });
}
const QueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
        person: {
            type: Person_1.default,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => getAssetByURI(`/people/${args.id}/`),
        },
        film: {
            type: Film_1.default,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => getAssetByURI(`/films/${args.id}/`),
        }
    }),
});
exports.default = new graphql_1.GraphQLSchema({
    query: QueryType,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kY290dHJlbGwvRG9jdW1lbnRzL0FwcHMvc3dxbC9zcmMvIiwic291cmNlcyI6WyJzY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUMvQixxQ0FBd0Y7QUFFeEYsaURBQThDO0FBQzlDLDZDQUEwQztBQUUxQyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztBQUV2Qyx1QkFBNkIsR0FBVzs7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7Q0FBQTtBQUVELE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQWlCLENBQUM7SUFDdEMsSUFBSSxFQUFFLE9BQU87SUFDYixXQUFXLEVBQUUsS0FBSztJQUVsQixNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2IsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLGdCQUFVO1lBQ2hCLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTthQUM1QjtZQUNELE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEtBQUssYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLGNBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7YUFDNUI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLGFBQWEsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztTQUM3RDtLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFSCxrQkFBZSxJQUFJLHVCQUFhLENBQUM7SUFDL0IsS0FBSyxFQUFFLFNBQVM7Q0FDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgR3JhcGhRTFNjaGVtYSwgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxMaXN0LCB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgUGVyc29uVHlwZSBmcm9tICcuL29iamVjdFR5cGVzL1BlcnNvbic7XG5pbXBvcnQgRmlsbVR5cGUgZnJvbSAnLi9vYmplY3RUeXBlcy9GaWxtJztcblxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL3N3YXBpLmNvL2FwaSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0QnlVUkkodXJpOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9JHt1cml9YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiBqc29uO1xufVxuXG5jb25zdCBRdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnUXVlcnknLFxuICBkZXNjcmlwdGlvbjogJy4uLicsXG5cbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIHBlcnNvbjoge1xuICAgICAgdHlwZTogUGVyc29uVHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IChyb290LCBhcmdzKSA9PiBnZXRBc3NldEJ5VVJJKGAvcGVvcGxlLyR7YXJncy5pZH0vYCksXG4gICAgfSxcbiAgICBmaWxtOiB7XG4gICAgICB0eXBlOiBGaWxtVHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IChyb290LCBhcmdzKSA9PiBnZXRBc3NldEJ5VVJJKGAvZmlsbXMvJHthcmdzLmlkfS9gKSxcbiAgICB9XG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMU2NoZW1hKHtcbiAgcXVlcnk6IFF1ZXJ5VHlwZSxcbn0pO1xuIl19