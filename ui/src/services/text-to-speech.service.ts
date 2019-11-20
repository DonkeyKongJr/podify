import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TextToSpeechService {
  constructor(private readonly httpClient: HttpClient) {}

  public post(text: string, languageCode: string): Observable<any> {
    const body = {
      text,
      languageCode
    };

    return this.httpClient.post("/tts", body);
  }
}
