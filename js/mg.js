class mg{
    constructor(cards){
        this.cardArray = cards;
        this.counter = document.getElementById('flips') 
    }

    begin(){
        this.tClicks = 0;
        this.cardCheck = null;
        this.matched = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffle(this.cardArray); 
            this.busy = false;  
        },500)
        this.hidecards();
        this.counter.innertext = this.tClicks;
    }
    win(){
        document.getElementById('win').classList.add('visible');
    }
    hidecards(){
        this.cardArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched')
        });
    }
    flipcard(card){
        if(this.canFlipcard(card)){
            this.tClicks++;
            this.counter.innerText = this.tClicks
            CDATASection.classlist.add('visible');

            if(this.cardCheck){
                this.checkMatch(card);
            }
            else{
                this.cardCheck=card;
            }
        }
    }
    checkMatch(card){
        if(this.getCard(card) === this.getCard(this.cardCheck))
            this.cardMatchs(card, this.cardCheck);
        else
            this.cardNotMatch(card, this.cardCheck);
        
            this.cardCheck =null;

            cardMatchs(card1, card2) {
                this.matched.push(card1);
                this.matched.push(card2);
                card1.classList.add('match');
                card2.classList.add('match');
                if(this.matched.length === this.cardArray.length)
                    this.win();
            }
            cardNotMatch(card1, card2) {
                this.busy = true;
                setTimeout(() => {
                    card1.classList.remove('visible');
                    card2.classList.remove('visible');
                    this.busy = false
                }, 1000);
            }

    }
    shuffle(cardArray){
        for(var i = cardArray - 1; i > 0; i--){
            var rand = math.floor(math.random()*(i+1));
            cardArray[rand].style.order = i;
            cardArray[i].style.order = rand;
        }
    }
    getCard(card) {
        return card.getElementsByClassName('cardfronimg')[0].src;
    }
    canFlipcard(card){
        return !this.busy && !this.matched.includes(card) && card !== this.cardCheck;
    }
}

function start(){
    var start = Array.from(document.getElementsByClassName('overlay'));
    var cards = Array.from(document.getElementsByClassName("card"))
    var game = new mg(cards);

    start.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                game.begin();
            });
        });
    cards.forEach(card =>{
        card.addEventListener('click', () => {
            game.flipcard(card);
        });
    });
}