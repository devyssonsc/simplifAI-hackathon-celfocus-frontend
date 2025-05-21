import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-export1',
  standalone: true,
  imports: [],
  templateUrl: './export1.component.html',
  styleUrl: './export1.component.scss'
})
export class Export1Component {

  constructor(private router: Router, private service: RequestApiService) { }
  
    ngOnInit(): void {
      this.service.addPath(this.router.url);
    }
}
