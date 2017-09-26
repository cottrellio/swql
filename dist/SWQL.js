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
const koa = require("koa");
const koaLogger = require("koa-logger");
const koaRouter = require("koa-router");
const koaBody = require("koa-bodyparser");
const apollo_server_koa_1 = require("apollo-server-koa");
const schema_1 = require("./schema");
class UPQL {
    createApp() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = new koa();
            const router = new koaRouter();
            app.use(koaLogger());
            router.post('/graphql', koaBody(), apollo_server_koa_1.graphqlKoa({ schema: schema_1.default }));
            router.get('/graphql', apollo_server_koa_1.graphqlKoa({ schema: schema_1.default }));
            router.get('/graphiql', apollo_server_koa_1.graphiqlKoa({ endpointURL: '/graphql' }));
            app.use(router.routes());
            app.use(router.allowedMethods());
            return Promise.resolve(app);
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield this.createApp();
            const server = app.listen(3000);
            console.log('Listening on port 3000...');
            return Promise.resolve(server);
        });
    }
}
exports.default = UPQL;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1dRTC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGNvdHRyZWxsL0RvY3VtZW50cy9BcHBzL3N3cWwvc3JjLyIsInNvdXJjZXMiOlsiU1dRTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCO0FBQzNCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBRTFDLHlEQUE2RDtBQUU3RCxxQ0FBOEI7QUFFOUI7SUFPZ0IsU0FBUzs7WUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUdyQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBRSw4QkFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsOEJBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxnQkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLCtCQUFXLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWxFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFPWSxLQUFLOztZQUNoQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7Q0FFRjtBQXRDRCx1QkFzQ0M7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga29hIGZyb20gJ2tvYSc7IC8vIGtvYUAyXG5pbXBvcnQgKiBhcyBrb2FMb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgKiBhcyBrb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7IC8vIGtvYS1yb3V0ZXJAbmV4dFxuaW1wb3J0ICogYXMga29hQm9keSBmcm9tICdrb2EtYm9keXBhcnNlcic7IC8vIGtvYS1ib2R5cGFyc2VyQG5leHRcblxuaW1wb3J0IHsgZ3JhcGhxbEtvYSwgZ3JhcGhpcWxLb2EsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1rb2EnO1xuaW1wb3J0IHsgR3JhcGhRTFNjaGVtYSwgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVUFFMIHtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBhcHAuXG4gICAqXG4gICAqIEByZXR1cm4ge2FwcH1cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlQXBwKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBrb2EoKTtcbiAgICBjb25zdCByb3V0ZXIgPSBuZXcga29hUm91dGVyKCk7XG5cbiAgICBhcHAudXNlKGtvYUxvZ2dlcigpKTtcblxuICAgIC8vIFJvdXRlc1xuICAgIHJvdXRlci5wb3N0KCcvZ3JhcGhxbCcsIGtvYUJvZHkoKSwgZ3JhcGhxbEtvYSh7IHNjaGVtYTogc2NoZW1hIH0pKTtcbiAgICByb3V0ZXIuZ2V0KCcvZ3JhcGhxbCcsIGdyYXBocWxLb2EoeyBzY2hlbWE6IHNjaGVtYSB9KSk7XG5cbiAgICByb3V0ZXIuZ2V0KCcvZ3JhcGhpcWwnLCBncmFwaGlxbEtvYSh7IGVuZHBvaW50VVJMOiAnL2dyYXBocWwnIH0pKTtcblxuICAgIGFwcC51c2Uocm91dGVyLnJvdXRlcygpKTtcbiAgICBhcHAudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgYXBwIG9uIHBvcnQgMzAwMC5cbiAgICpcbiAgICogQHJldHVybiB7c2VydmVyfVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuICAgIGNvbnN0IGFwcCA9IGF3YWl0IHRoaXMuY3JlYXRlQXBwKCk7XG4gICAgY29uc3Qgc2VydmVyID0gYXBwLmxpc3RlbigzMDAwKTtcblxuICAgIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAzMDAwLi4uJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXJ2ZXIpO1xuICB9XG5cbn07XG4iXX0=