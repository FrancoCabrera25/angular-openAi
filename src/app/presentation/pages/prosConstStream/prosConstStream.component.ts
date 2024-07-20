import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-const-stream',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './prosConstStream.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConstStreamComponent { }
