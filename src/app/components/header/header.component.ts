import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  pathResponse: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2, private service: RequestApiService) { }

  ngOnInit(): void {
      this.service.response$.subscribe(
        (response) => {
          this.pathResponse = response;
          if(response){

            const not = this.el.nativeElement.querySelector("#notification");
            this.renderer.setStyle(not, 'display', 'block');
          }
        }
      )
  }

  openMenu() {
    const menu = this.el.nativeElement.querySelector(".menu-nav");
    const btHamburguer = this.el.nativeElement.querySelector('.btHamburguer');
    const overlay = this.el.nativeElement.querySelector('#overlay');

    this.renderer.setStyle(btHamburguer, 'display', 'none');
    this.renderer.setStyle(menu, 'display', 'flex');
    this.renderer.setStyle(overlay, 'display', 'block');
  }

  closeMenu() {
    const menu = this.el.nativeElement.querySelector(".menu-nav");
    const btHamburguer = this.el.nativeElement.querySelector('.btHamburguer');
    const overlay = this.el.nativeElement.querySelector('#overlay');

    this.renderer.setStyle(btHamburguer, 'display', 'block');
    this.renderer.setStyle(menu, 'display', 'none');
    this.renderer.setStyle(overlay, 'display', 'none');
  }
}
