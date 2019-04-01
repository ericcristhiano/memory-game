import { Component, OnInit, Input } from "@angular/core";
import { Card } from "src/app/entities/card.class";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private gameService: GameService) {}

  ngOnInit() {}
}
