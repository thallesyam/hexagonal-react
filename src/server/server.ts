import { belongsTo, createServer, hasMany, Model } from "miragejs";
import { generateSeeds } from "./seeds";

export function makeServer({ environment }: { environment: 'development' | 'production' | 'test' }) {
  return createServer({
    environment,

    models: {
      store: Model.extend({
        products: hasMany(),
      }),
      product: Model.extend({
        store: belongsTo(),
      }),
    },

    seeds(server) {
      generateSeeds(server);
    },

    routes() {
      this.urlPrefix = 'http://localhost:5173/api';

      this.get("/stores", (schema: any) => {
        return schema.stores.all().models.map((store: any) => ({
          ...store.attrs,
          products: store.products.models.map((product: any) => product.attrs),
        }));
      });

      this.get("/products", (schema: any) => {
        return schema.products.all().models.map((product: any) => ({
          ...product.attrs,
          store: product.store.attrs,
        }));
      });
    },
  });
}
