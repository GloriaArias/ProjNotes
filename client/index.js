// Incorporando estilos a mi bundle
import './styles/style.css'

console.log("🎁 Webpack Working!!!");

// Default parameters
let show = (m= "Hot Module Replacement Working") => {
    alert(m)
};
show();

// Promises
function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('function resolve')
        }, 2000)
    });
}

async function asyncCall() {
    console.log("Calling asyn function!!!");
    const result = await resolveAfter2Seconds();
    console.log(result); // Imprime "function resolve" en la consola

}

asyncCall();
