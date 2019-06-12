let GameState = {
  playOptions: ["Rock", "Paper", "Scissors"],
  winOptions: ["beats", "loses to", "draws against"],
  stateAI: "Rock",
  stateHuman: "Rock",
  stateWinner: "draws against",
  winsAI: 0,
  winsHuman: 0,

  draw: function () {
    document.querySelector("#score-human").innerHTML = this.winsHuman.toString();
    document.querySelector("#score-ai").innerHTML = this.winsAI.toString();

    document.querySelector("#humanstate").innerHTML = this.stateToIcon(this.stateHuman);
    document.querySelector("#aistate").innerHTML = this.stateToIcon(this.stateAI);
    document.querySelector("#winstate").innerHTML = this.stateWinner;
  },

  play: function (choice) {

    this.stateHuman = choice;
    this.stateAI = this.aiChoice(choice);

    if (this.stateHuman === this.stateAI) {
      this.stateWinner = this.winOptions[2];
    }
    else if (this.stateHuman === "Rock") {
      if (this.stateAI === "Scissors") {
        this.stateWinner = this.winOptions[0];
        this.winsHuman++;
      }
      else {
        this.stateWinner = this.winOptions[1];
        this.winsAI++;
      }
    }
    else if (this.stateHuman === "Paper") {
      if (this.stateAI === "Rock") {
        this.stateWinner = this.winOptions[0];
        this.winsHuman++;
      }
      else {
        this.stateWinner = this.winOptions[1];
        this.winsAI++;
      }
    }
    else if (this.stateHuman === "Scissors") {
      if (this.stateAI === "Paper") {
        this.stateWinner = this.winOptions[0];
        this.winsHuman++;
      }
      else {
        this.stateWinner = this.winOptions[1];
        this.winsAI++;
      }
    }


    this.draw();
  },

  resetScore: function () {
    this.winsAI = 0;
    this.winsHuman = 0;
    this.draw();
  },

  aiChoice: function (choice) {
    if (Math.random() > 0.5) {
      return this.playOptions[Math.floor(Math.random() * 3)];
    }
    else {                //cheat but not all the time so it isnt obvious; cheating still draws to make it even less obvious
      if (choice === "Rock") {
        return (Math.random() > 0.5) ? "Paper" : "Rock";
      }
      else if (choice === "Scissors") {
        return (Math.random() > 0.5) ? "Rock" : "Scissors";
      }
      else {
        return (Math.random() > 0.5) ? "Scissors" : "Paper";
      }
    }
  },

  stateToIcon: function (state) {
    if (state === "Rock") {
      return "<i class='fas fa-hand-rock'></i>";
    }
    else if (state === "Scissors") {
      return "<i class='fas fa-hand-scissors'></i>";
    }
    else {
      return "<i class='fas fa-hand-paper'></i>";
    }
  }



}

GameState.draw();

