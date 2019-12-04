const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const selfProfile = {};

rl.question("What is your name?, Nickname acceptable! \n", input => {
	// console.log(`Name: ${input}`);
	selfProfile.name = input;
  
	rl.question("What's an activity you like doing? \n", input => {
		// console.log(`Activity: ${input}`);
		selfProfile.activity = input;
    
    rl.question(`What music do you listen to while doing ${selfProfile.activity}? \n`, input => {
      // console.log(`Music: ${input}`);
      selfProfile.music = input;

      rl.question("Which meal is your favorite? (dinner, brunch, etc.) \n", input => {
        // console.log(`Meal: ${input}`);
        selfProfile.meal = input;
        
        rl.question(`What's your favorite food to eat for ${selfProfile.meal} \n`, input => {
          // console.log(`Favorite Food: ${input}`);
          selfProfile.favFood = input;
          
          rl.question("Which sport is your absolute favorite? \n", input => {
            // console.log(`Favorite Sport: ${input}`);
            selfProfile.favSport = input;
            
            rl.question("What's your superpower? In a few words, tell us what your amazing at. \n", input => {
              // console.log(`superPower: ${input}`);
              selfProfile.superPower = input;
              process.stdout.write(`Hi my name is ${selfProfile.name}, I like doing ${selfProfile.activity}. While I do ${selfProfile.activity}, I like listening to ${selfProfile.music}.\nMy favorite meal is ${selfProfile.meal}, and I enjoy eating ${selfProfile.favFood} for ${selfProfile.meal}. My favorite sport is ${selfProfile.favSport}. My superpower is ${selfProfile.superPower}!\n`)

              rl.close();
            });
            // rl.close();
          });

        });

      });

    });

  });
  
});



// rl.question('', (nickName) => {
//   console.log(`Thank you for your valuable feedback: ${nickName}`);

//   rl.close();
// });
// console.log(input);
// console.log(selfProfile);
