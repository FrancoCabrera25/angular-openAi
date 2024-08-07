import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-tunning',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './imageTunning.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageTunningComponent { }
