import { Component } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"]
})
export class StartComponent {
  constructor(public gameService: GameService, public router: Router) {}

  startGame() {
    if (this.gameService.playerName && this.gameService.playerName.trim()) {
      this.router.navigate(["playing"]);
    }
  }
}
