import { foo } from './foo';
import './style.css';
import pic from './assets/imges/1.png';
document.body.style.backgroundImage  = `url(${pic})`;
console.log(pic);
console.log(foo());
console.log("main");