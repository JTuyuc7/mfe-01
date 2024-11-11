# Microfrontends

Simple app to understand how microfrontends work.
This project is devided in 3 parts. 

* Container - this part is responsable to render the two other MFEs using the `ModuleFederationPlugin` plugin.

```javascript
// inside the webpack.config.js file
new ModuleFederationPlugin({
  name: 'container',
    remotes: {
      products: 'products@http://localhost:8081/remoteEntry.js',
      cart: 'cart@http://localhost:8082/remoteEntry.js',
    },
  }),
```
This tells the container where the applications are, and the aliases they will have.

The `cart` and `products` Microfrontends will have a similar configuration.
```javascript
new ModuleFederationPlugin({
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductsIndex': './src/bootstrap',
  },
  shared: ['faker'],
  // shared: {
  //   faker: {
  //     singleton: true
  //   }
  // }
})
```
This exposes the configuration of the application.