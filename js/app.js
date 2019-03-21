//Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i);
};

//Get Even
for (let i = 0; i <= 200; i++) {
    if ( i % 2 === 0){
        console.log(i);   
    }
}

//Excited Kitten
// #1
for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSS!");
}
// #2
const phrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
 

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSS!");
    if ( i % 2 === 0 ) {
        let random = Math.floor(Math.random()*3);
        console.log(phrases[random]);
    }
}