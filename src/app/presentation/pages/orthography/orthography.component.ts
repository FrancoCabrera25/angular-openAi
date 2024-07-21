import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxEvent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
  TextMessageEvent,
  TypingLoaderComponent,
} from '@components/index';
import { Message } from '@interface/index';
import { OpenAiService } from 'app/presentation/services/openAi.service';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent {
  private openAiService = inject(OpenAiService);
  public messages = signal<Message[]>([]);
  public isLoading = signal<boolean>(false);

  handleMessage(prompt: string) {
    console.log('prompt', prompt);
  }
  handleMessageWithFile({ prompt, file }: TextMessageEvent) {
    console.log('prompt', {});
  }
  handleMessageWithSelect(event: TextMessageBoxEvent): void {}
}
