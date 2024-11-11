import faker from 'faker'

// let products = ''

// for (let i = 0; i < 10; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// const root = document.getElementById('dev-products');
// root.innerHTML = products;

console.log(products)

const mount = (element) => {
  let products = ''

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  // const root = element.getElementById('dev-products')
  element.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('dev-products')

  //! Assuming our container does not have an element with an id of 'dev-products'
  if (element) {
    //! We are probably running in isolation
    mount(element)
  }
}

//! Context/Situation #1
//! We are running this file in development in isolation
//! We are using our local index.html file
//! Which DEFINITELY has an element with an id of 'dev-products'
//! We want to immediately render our app into that element

//! Context/Situation #2
//! We are running this file in development or production
//! through the CONTAINER app
//! NO GUARANTEE that an element with an id of 'dev-products' exists
//! WE DO NOT WANT try to immediately render the app

export { mount }