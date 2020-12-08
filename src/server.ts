import App from "./app";

import IndexRoute from "./routes/index.route";
import AuthRoute from "./routes/auth.route";
import PostsRoute from "./routes/posts.route";

const app = new App([new IndexRoute(), new PostsRoute(), new AuthRoute()]);

app.listen();
