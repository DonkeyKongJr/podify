import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TTSResult } from 'src/app/models/tts-result';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  constructor(private readonly httpClient: HttpClient) {}

  public post(text: string, languageCode: string): Observable<TTSResult> {
    const body = {
      text,
      languageCode
    };

    return this.httpClient.post('/tts', body) as Observable<TTSResult>;
  }
}
