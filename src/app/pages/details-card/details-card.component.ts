import { Component } from '@angular/core';
import { Details1Component } from '../details1/details1.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [RouterModule, Details1Component],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent {

}
