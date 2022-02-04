const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,     
  perfil: 640, 
  skills: 640,
  works: 640,
  groups: 660,
  comments: 660,
  subscribe: 660
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

// 600 User must own the resource to write or read the resource.
// 640 User must own the resource to write the resource. User must be logged to read the resource.
// 660 User must be logged to write or read the resource.