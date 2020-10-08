const GameState = Object.freeze({
    WELCOME: Symbol("Welcome"),
    CAR: Symbol("car"),
    PHONE: Symbol("phone"),
    KNOCK: Symbol("knock"),
    KEY: Symbol("key"),
    MESSAGE: Symbol("meeage"),
    STUDY: Symbol("study"),
    GIRL: Symbol("girl"),
    ASSIGNMENT: Symbol('assignment'),
    CAR2: Symbol("car2"),
    KEY2: Symbol("key2"),
    MESSAGE2: Symbol("message2"),
    STUDY2: Symbol("study2"),
    FINAL: Symbol("final"),
    FINAL2: Symbol("final2"),
    DONE: Symbol("done")
})

module.exports = class Game{
    constructor(){
        this.stateCurrent = GameState.WELCOME;
        this.sNotValid = "Sorry I don't understand";
        this.sLine = "";
        for (let n = 0; n < 99; n++) {
            this.sLine = this.sLine + "GET OUT ";
        }
    }

    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCurrent){
            case GameState.WELCOME:
                sReply = "The class just ended, it's your last class for this semester. Your wife alwasy compliants that your teaching career is taking all of your times because you just really love your job. But it is time to have a little get-away with her. 'Just finish marking the final assignments and you are good to go for Hawaii tomorrow.'You thought and get in to your car."
                this.stateCurrent = GameState.CAR;
                break;
            case GameState.CAR:
                sReply = "You start your car. It's October, but strangely it's super cold this year the weather forecast is right about it may snow a bit today. It is light but you fell the road get slippery. Suddenly your phone rings. Do you ANSWER IT or NO?"
                this.stateCurrent = GameState.PHONE;
                break;
            case GameState.PHONE:
                if(sInput.toLowerCase().match("answer it")){
                    sReply = "It is your wife, telling you it starts to snow and ask you to be careful. You laughs at her and doesn't notice that a little while cat dashs to the middle of the road. Lucky for the cat you turns and avoided her and instead you drive off the road and crashs into the lake... GAME OVER";
                    this.stateCurrent = GameState.CAR;
                } else if (sInput.toLowerCase().match("no")){
                    sReply = "It is indeed slippery so you concentrate on the road ahead. 20 mins later, you parked outside your house. After gathering your bags and school work, you Walk up the front door, do you KNOCK or USE your KEY?"
                    this.stateCurrent = GameState.KEY;
                } else {
                    sReply = this.sNotValid;
                }
                break;
            case GameState.KEY:
                if (sInput.toLowerCase().match("use key")){
                    sReply = "You use your key to open the door, and flip the switch. Usually your wife will be home at the time with whole set of dinner ready, but not today and you are getting hungry. 'Maybe she is late because of the snow.' you wonders and then your phone buzzed. Do you want to READ the MESSAGE or OPEN FRIDGE to find food?"
                    this.stateCurrent = GameState.MESSAGE;
                } else if (sInput.toLowerCase().match("knock")){
                    sReply = "The lights are on, so you knocked, but strangely no one answers. Suddenly the lights went off. You use your key to open the door, and flip the switch. Usually your wife will be home at the time with whole set of dinner ready, but not today and you are getting hungry. 'Maybe she is late because of the snow.' you wonders and then your phone buzzed. Do you want to READ the MESSAGE or OPEN FRIDGE to find food? "
                    this.stateCurrent = GameState.MESSAGE;
                } else {
                    sReply = this.sNotValid;
                }
                break;
            case GameState.MESSAGE:
                if (sInput.toLowerCase().match("read message")) {
                    sReply = "You thought it would be your wife but its actually the girl from admins office, 'Don't forget to hand in the assignment marks before your leave! Have a great trip!' You drop your phone and getting a little annoyed. Instead of findind food, you decide to get the work done. "
                    this.stateCurrent = GameState.STUDY;
                } else if (sInput.toLowerCase().match("open fridge")){
                    sReply = "You ignores your phone, open the fridge, the left-over sandwich from this morning is not there but you find a huge pot of creamy dark soup. You loves soup but unfortunately it is frozen into a large chunk, will take ages to defrost it. So you give up and decide to get the work done instad. "
                    this.stateCurrent = GameState.STUDY;
                } else {
                    sReply = this.sNotValid;
                }
                break;
            case GameState.STUDY:
                sReply = "You walk to your study and turn on your computer, after 1 and a half hours you really are starved. And your wife is still not home. After finding your phone is running out of juice you plug it in and decide to get the last assignment marked."
                this.stateCurrent = GameState.GIRL;
                break;
            case GameState.GIRL:
                sReply = "You teaches programming, the assignment is asking your student to make a mini interactive chatbot game. You find some of their story line are quite interesting. But not this last one, It belongs to one of the quiet gril from your class, totally oppsite from outgoing, usually carry differnt story books, wonder why isn't she on the English major instead of Computer. You open the project, the first line wrote:"
                this.stateCurrent = GameState.ASSIGNMENT;
                break;
            case GameState.ASSIGNMENT:
                sReply = "'The class just ended, it's your last class for this semester. Your wife alwasy complianted that your teaching career was taking all of your times because you just really love your job. But it was time to have a little get-away with her. 'Just finish marking the final assignments and you are good to go for Hawaii tomorrow.'You thought and got in to your car.' Do you want to CONTINUE or NO?"
                this.stateCurrent = GameState.CAR2;
                break;
            case GameState.CAR2:
                if (sInput.toLowerCase().match("continue")) {
                    sReply = "You started your car, You didn't seem to mind that the weather is snowy for October. Igonred the phone call, you just want to head home to your wife. Do you want to CONTINUE or NO?"
                    this.stateCurrent = GameState.KEY2;
                } else {
                    sReply = "You have to CONTINUE";
                    this.stateCurrent = GameState.CAR2;
                }
                break;
            case GameState.KEY2:
                if (sInput.toLowerCase().match("continue")) {
                    sReply = "After 20 mins drive, you parked outside your house. Instead of knocking, you opened the door with your key. You phone buzzed, do you want to READ the MESSAGE or CALL your WIFE"
                    this.stateCurrent = GameState.MESSAGE2;
                } else {
                    sReply = "You have to CONTINUE";
                    this.stateCurrent = GameState.KEY2;
                }
                break;
            case GameState.MESSAGE2:
                if (sInput.toLowerCase().match("read message")) {
                    sReply = this.sLine;
                    this.stateCurrent = GameState.STUDY2;
                } else if (sInput.toLowerCase().match("call wife")) {
                    sReply = "You called your wife, she was crying, and membling: 'How could this happened? It is all my fault...I am so sorry...It is all my fault...I am so sorry...'";
                    this.stateCurrent = GameState.STUDY2;
                } else {
                    sReply = this.sNotValid;
                }
                break;
            case GameState.STUDY2:
                sReply = "You steady youself and went to your study. A men was sitting there, in front of your computer, inside your house, marking your student's assignment. Wearing the same cloth as you did. 'This can't be happening! Not again!' You turned around and GO TO KITCHEN or GO TO BACKYARD."
                this.stateCurrent = GameState.FINAL;
                break;
            case GameState.FINAL:
                if (sInput.toLowerCase().match("go to kitchen")) {
                    sReply = "You went to the kitchen, picked up the butcher knife, and chopped that man's head off, Your head rolled off the shoulder. The Screen written: "
                    this.stateCurrent = GameState.FINAL2;
                } else if (sInput.toLowerCase().match("go to backyard")) {
                    sReply = "You ran off throught the backdoor, stumbled and fell to the ground. It's a HEAD, a human head, a head with your face on it. Your wife was crying on the backyard, held her phone and mumbling. You didn't notice that another you ran out from the house, holding the bucher knife."
                    this.stateCurrent = GameState.DONE;
                } else {
                    sReply = this.sNotValid;
                }
                break;
            case GameState.FINAL2:
                sReply = this.sLine;
                this.stateCurrent = GameState.DONE;
                break;
            case GameState.DONE:
                sReply = "Thank you very much for playing. Would you like to play again?";
                this.stateCurrent = GameState.WELCOME;
                break;
        }
        return ([sReply]);
    }
}