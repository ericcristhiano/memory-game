import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-playing",
  templateUrl: "./playing.component.html"
})
export class PlayingComponent implements OnInit {
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    if (!this.gameService.playerName) {
      this.router.navigate(["start"]);
    }
  }
}
