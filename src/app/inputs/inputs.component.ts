import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input({required:false}) value=0
  @Input()label=''
}
