import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


export interface TextMessageEvent {
  file: File;
  prompt?: string | null;
}

@Component({
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxFile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {

  public placeHolder = input<string>();
  public sendMessage = output<TextMessageEvent>();

  public file: File | undefined;

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [''],
    file: [null, [Validators.required]]
  });

  handleSelectedFile(event: any){
    const file = event.target.file.item(0);

    this.form.controls.file.setValue(file);

  }
  handleSubmit(): void {

    if(this.form.invalid) return;

    const { prompt = '', file } = this.form.value;

    this.sendMessage.emit({
     file: file!,
     prompt
    });
    this.form.reset();

  }
}
