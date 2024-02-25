import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bin2dec';
  binaryInput: string = '0';
  result: string = '0';

  handleInputChange(event: any) {
    this.binaryInput = event.target.value || '0';
    this.result = this.convertToDecimal(this.binaryInput);
  }

  convertToDecimal(bin: string) {
    return parseInt(bin, 2).toString();
  }
}
