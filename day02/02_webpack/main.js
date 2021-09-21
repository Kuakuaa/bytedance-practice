import { foo } from './foo';
import './assets/css/style.css';
import pic from './assets/imges/1.png';
import * as user from "./user"
document.body.style.backgroundImage = `url(${pic})`;
console.log(pic);
console.log(foo());
console.log("main");
const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
  console.log('click');
  console.log(user);
})