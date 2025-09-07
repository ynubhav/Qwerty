import { Hono } from 'hono';
import appRouter from './routes';
import { cors } from 'hono/cors'

const app = new Hono<{
    Bindings : {
        JWT_SECRET : string,
        DATABASE_URL : string,
    }
}>;

app.use('*',cors());
app.route('/api/v1',appRouter);
app.notFound;

export default app;
