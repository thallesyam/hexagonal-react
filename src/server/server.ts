import { belongsTo, createServer, hasMany, Model } from "miragejs"
import { generateSeeds } from "./seeds"

type IServer = {
  environment: 'development' | 'production' | 'test'
}

export function makeServer({ environment }: IServer) {
  let server = createServer({
    environment,

    models: {
      store: Model.extend({
        product: hasMany()  
      }),
      product: Model.extend({
        store: belongsTo()
      })
    },

    seeds(server) {
      generateSeeds(server)
    },

    routes() {
      this.urlPrefix = 'http://localhost:5173/api'

      this.get("/stores", (schema) => {
        return schema.all("store");
      });
      
      this.get("/products", (schema) => {
        return schema.all("product");
      });
    }
  })

  return server
}