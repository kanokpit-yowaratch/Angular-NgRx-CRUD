import { Component } from '@angular/core';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  faHomeLg = faHomeLg;
}
