import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RankingService {
  getList() {
    const stringRanking =
      localStorage.getItem("memory-game/ranking") || JSON.stringify([]);
    const list = JSON.parse(stringRanking);

    list.sort((a, b) => a.rounds - b.rounds);

    return list;
  }

  addPlayer(player) {
    const list = this.getList();
    list.push(player);
    localStorage.setItem("memory-game/ranking", JSON.stringify(list));
  }
}
