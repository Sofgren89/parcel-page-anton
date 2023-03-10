import anime from "animejs";
import { text } from "./modules/module";

console.log(text)


anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
})


//Images

const img= document.createElement('img');
document.body.append(img);

console.log(import.meta.url)


const imgUrl= new URL('./media/arsenal.png', import.meta.url)

img.src=imgUrl;
