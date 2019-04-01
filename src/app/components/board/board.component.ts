import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit() {}
}
