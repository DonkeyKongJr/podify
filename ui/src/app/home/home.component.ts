import { Component, OnInit } from "@angular/core";
import { TextToSpeechService } from "../../services/text-to-speech.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public text = "";
  constructor(private readonly textToSpeechService: TextToSpeechService) {}

  ngOnInit() {}

  public startPodify() {
    this.textToSpeechService.post(this.text, "de-at").subscribe(() => {
      this.text = "";
    });
  }
}
