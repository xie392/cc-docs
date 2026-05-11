const fs = require("fs");
const path = require("path");
const file = path.join(
  __dirname,
  "../node_modules/nextra-theme-docs/dist/schemas.js"
);
let content = fs.readFileSync(file, "utf8");
if (content.includes("children: reactNode,")) {
  content = content.replace("children: reactNode,", "children: reactNode.optional(),");
  fs.writeFileSync(file, content);
  console.log("Patched nextra-theme-docs schemas.js: children → optional");
} else if (content.includes("children: reactNode.optional(),")) {
  console.log("Patch already applied");
} else {
  console.error("Could not find children pattern to patch");
  process.exit(1);
}
