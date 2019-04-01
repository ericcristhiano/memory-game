import { Component, OnInit } from "@angular/core";
import { RankingService } from "src/app/services/ranking.service";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  constructor(
    public rankingService: RankingService,
    public gameService: GameService
  ) {}

  ngOnInit() {}
}
