import { Application } from "jsr:@oak/oak";
const app = new Application();
app.use((ctx) => {
  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = "<body>Hello, World!!</body>";
});

app.listen({ port: 8000 });
