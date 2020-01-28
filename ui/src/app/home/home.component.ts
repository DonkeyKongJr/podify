import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from '../../services/text-to-speech.service';
import { TTSResult } from '../models/tts-result';
import { PodService } from 'src/services/pod.service';
import { Pod } from '../models/pod';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = '';
  public text = '';
  public linkToFile = '';
  constructor(
    private readonly textToSpeechService: TextToSpeechService,
    private readonly podService: PodService,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {}

  public async startPodify() {
    this.textToSpeechService.post(this.text, 'de-at').subscribe(async (ttsResult: TTSResult) => {
      this.linkToFile = ttsResult.path;
      await this.podService.create(this.getPod(ttsResult));
      this.text = '';
      this.name = '';
    });
  }

  private getPod(ttsResult: TTSResult): Pod {
    return {
      name: this.name,
      text: this.text,
      url: ttsResult.path,
      creator: this.authService.userData.uid,
      createdOn: new Date()
    };
  }
}
