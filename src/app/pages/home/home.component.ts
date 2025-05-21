import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private service: RequestApiService) { }

  ngOnInit(): void {
    this.service.addPath(this.router.url);
  }
}
