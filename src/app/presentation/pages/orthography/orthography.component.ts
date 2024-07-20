import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default  class OrthographyComponent {


  handleMessage(prompt: string){
    console.log("prompt", prompt);
  }

  handleMessageWithFile( { prompt, file  }: TextMessageEvent){
    console.log("prompt", {});
  }
 }
