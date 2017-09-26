import * as koa from 'koa'; // koa@2
import * as koaLogger from 'koa-logger';
import * as koaRouter from 'koa-router'; // koa-router@next
import * as koaBody from 'koa-bodyparser'; // koa-bodyparser@next

import { graphqlKoa, graphiqlKoa, } from 'apollo-server-koa';
import { GraphQLSchema, } from 'graphql';
import schema from './schema';

export default class UPQL {

  /**
   * Create the app.
   *
   * @return {app}
   */
  private async createApp() {
    const app = new koa();
    const router = new koaRouter();

    app.use(koaLogger());

    // Routes
    router.post('/graphql', koaBody(), graphqlKoa({ schema: schema }));
    router.get('/graphql', graphqlKoa({ schema: schema }));

    router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

    app.use(router.routes());
    app.use(router.allowedMethods());

    return Promise.resolve(app);
  }

  /**
   * Start the app on port 3000.
   *
   * @return {server}
   */
  public async start() {
    const app = await this.createApp();
    const server = app.listen(3000);

    console.log('Listening on port 3000...');
    return Promise.resolve(server);
  }

};
