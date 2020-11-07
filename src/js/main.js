import '../styles/main.scss';
import image from '../assets/images/tonyem.jpg';
import Model from './models/Model';

const model = new Model('Webpack 5 Javascript by TonYem');

console.log(model.testString());
const body = document.querySelector('body');
const mainImage = document.createElement('img');
const p = document.createElement('p');
const welcomeText = 'A ready to use javaScript Webpack 5 starter build for small front-end projects and SPA includes assets & code optimization. The build includes useful packages like webpack-dev-server, sass-loader, normalize-scss, image-minimizer, babel, eslint(airbnb) and others…';
mainImage.src = image;

p.textContent = welcomeText;
body.append(p);
body.append(mainImage);
