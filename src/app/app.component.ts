import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { filter } from 'rxjs';
import { RequestApiService } from './services/request-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'simplifAI-hackathon-celfocus-frontend';

  paths = "";

  constructor(private router: Router, private service: RequestApiService){}

  ngOnInit(): void {
      this.service.addPath(this.router.url);
  }
}
