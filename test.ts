import fs from "node:fs";
import Crypto from "crypto";
import data from "./src/data/products-dataset.json";
import { slugify } from "./src/lib/utils";

const newData = data.map((p) => ({
  ...p,
  slug: slugify(p.title),
  mpn: String(p.mpn),
  id: Crypto.randomUUID(),
}));

try {
  fs.writeFile(
    "./src/data/products-dataset.json",
    JSON.stringify(newData),
    null,
    (e) => {
      console.error(e);
    },
  );
} catch (e) {
  console.log(e);
}
