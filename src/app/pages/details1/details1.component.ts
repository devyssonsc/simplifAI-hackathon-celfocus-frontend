import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-details1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details1.component.html',
  styleUrl: './details1.component.scss'
})
export class Details1Component implements OnInit {

  constructor(private router: Router, private service: RequestApiService) { }

  ngOnInit(): void {
    this.service.addPath(this.router.url);
  }
}
