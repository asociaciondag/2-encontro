import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  location: new URL("https://dag.gal/2-encontro/"),
});

site.use(postcss());
site.use(svgo());
site.use(metas());
site.copy("fonts");

export default site;
