import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume();

site.use(postcss());
site.use(svgo());
site.copy("fonts");

export default site;
