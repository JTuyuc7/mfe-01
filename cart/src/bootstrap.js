import faker from 'faker'

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`
  // const root = document.getElementById('dev-cart')
  element.innerHTML = cartText
  console.log('From Cart: ')
}

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('dev-cart')

  //! Assuming our container does not have an element with an id of 'dev-cart'
  if (element) {
    //! We are probably running in isolation
    mount(element)
  }
}

export { mount }
