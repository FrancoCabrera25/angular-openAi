import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-cons',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ProsCons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsComponent { }
