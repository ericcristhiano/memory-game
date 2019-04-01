import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { StartComponent } from "./routes/start/start.component";
import { RankingComponent } from "./routes/ranking/ranking.component";
import { PlayingComponent } from "./routes/playing/playing.component";
import { BoardComponent } from "./components/board/board.component";
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StartComponent,
    RankingComponent,
    PlayingComponent,
    BoardComponent,
    ModalComponent,
    ButtonComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
