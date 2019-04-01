export class Card {
  id: string;
  visible: boolean = false;
  image: string;

  constructor(id, image) {
    this.id = id;
    this.image = image;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}
