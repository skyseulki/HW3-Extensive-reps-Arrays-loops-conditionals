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

//Fizz Buzz
// #1
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// #2
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if ( i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Getting to know you
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// #1
kenny[0] = "Gameboy";

// #2
jimClark[1] += 1;

// #3
ryan[2] = "Gotham City";

// #4
reuben.pop("Durham");
reuben.push("Chicago");

// #5
jimHaff.pop("All cities");
jimHaff.push("Seoul","Sydney", "Tokyo");

// #6 
jimHaff.splice(2,1);


