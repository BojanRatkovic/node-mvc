import App from "./app";

import IndexRoute from "./routes/index.route";
import PostsRoute from "./routes/posts.route";

const app = new App([new IndexRoute(), new PostsRoute()]);

app.listen();
