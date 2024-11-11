import { mount } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mount(document.getElementById('my-products'));
mountCart(document.getElementById('my-cart'));