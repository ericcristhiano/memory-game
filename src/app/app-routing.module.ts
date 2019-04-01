import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./routes/start/start.component";
import { PlayingComponent } from "./routes/playing/playing.component";
import { RankingComponent } from "./routes/ranking/ranking.component";

const routes: Routes = [
  { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "start", component: StartComponent },
  { path: "playing", component: PlayingComponent },
  { path: "ranking", component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
