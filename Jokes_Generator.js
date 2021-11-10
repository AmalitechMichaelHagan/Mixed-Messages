//Jokes Generator, Randomly provides a joke based on 3 types i.e KnockKnock jokes, whatDoYouCall Jokes and whyDid Jokes

//Object of knockKnock Jokes constructs. contains arrays and getter methods
const knockKnockJokes = {
'_preface':['Luke','Figs','Cow says','Hal','Alice','Wayu'],
'_punchLine':['Luke through the peep hole and find out','Figs the doorbell, it’s not working!','No, a cow says mooooo!','Hal will you know if you don’t open the door?','Alice fair in love and war.','Wayu wan waa me wayu wan waa me, I\'m in San Francisco Jamming!'],
get preface(){
    return this._preface;
},
get punchline(){
    return this._punchLine;
}
}

//Object of whatDoYouCall Jokes constructs. contains arrays and getter methods
const whatDoyouCallJokes = {
'_preface': ['a fake noodle','something that runs but never gets anywhere','something that’s easy to get into, but hard to get out of','a joke without a punchline','the security guards outside the Samsung factory','someone that saw an iPhone being stolen','someone who never passes gas in public','a boomerang that doesn’t come back'],
'_punchLine': ['An impasta!','A refrigerator.','Trouble.','Silence.','The Guardians of the Galaxy.','An iWitness.','A private tutor.','A stick.'],

get preface(){
    return this._preface;
},
get punchline(){
    return this._punchLine;
}

}

//Object of whyDid Jokes constructs. contains arrays and getter methods
const whyDidJokes = {
'_preface': ['the teddy bear say no to dessert','the student eat his homework','the dinosaur cross the road','the kid bring a ladder to school','the invisible man turn down the job offer','Johnny throw the clock out of the window','the man put his money in the freezer','the tomato blush','Humpty Dumpty have a great fall','the scarecrow win an award'],
'_punchLine': ['Because she was stuffed','Because the teacher told him it was a piece of cake!','Because the chicken wasn’t born yet.','Because she wanted to go to high school.','Because he couldn’t see himself doing it','Because he wanted to see time fly.','He wanted cold hard cash!','It saw the salad dressing.','To make up for his miserable summer.','Because he was out standing in his field.'],

get preface(){
    return this._preface;
},
get punchline(){
    return this._punchLine;
}

}

const jokeTypes = [knockKnockJokes,whatDoyouCallJokes,whyDidJokes]; //array of containing the 3 Jokes objects


//Function that constructs a joke randomly and logs it to screen. Takes a parameter that determines number of jokes to display
const makeMeLaugh = (numOfJokes) =>{

let typeOfJoke = 0;
let selectedJoke = 0;

for(let iteration = 0; iteration<numOfJokes; iteration++){

typeOfJoke = Math.floor(Math.random()*jokeTypes.length);
selectedJoke = Math.floor(Math.random()*jokeTypes[typeOfJoke]._preface.length);

switch(typeOfJoke){

    case 0: console.log(`Knock knock \nWho's there?\n${knockKnockJokes.preface[selectedJoke]}\n${knockKnockJokes.preface[selectedJoke]} who?\n${knockKnockJokes.punchline[selectedJoke]}\n`); break;
    case 1: console.log(`What do you call ${whatDoyouCallJokes.preface[selectedJoke]}?\n${whatDoyouCallJokes.punchline[selectedJoke]}\n`); break
    case 2: console.log(`Why did ${whyDidJokes.preface[selectedJoke]}?\n${whyDidJokes.punchline[selectedJoke]}\n`); break;

    default: console.log("Error"); break;


}

}

}

//test Run
makeMeLaugh(20);