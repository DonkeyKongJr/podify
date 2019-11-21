import { Component, OnInit } from "@angular/core";
import { TextToSpeechService } from "../../services/text-to-speech.service";
import { TTSResult } from "../../models/tts-result";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public text = "";
  public linkToFile = "";
  constructor(private readonly textToSpeechService: TextToSpeechService) {}

  ngOnInit() {}

  public startPodify() {
    this.textToSpeechService
      .post(this.text, "de-at")
      .subscribe((ttsResult: TTSResult) => {
        this.text = "";
        this.linkToFile = ttsResult.path;
      });
  }
}
