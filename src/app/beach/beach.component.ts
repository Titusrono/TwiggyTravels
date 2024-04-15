import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-beach',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css'
})
export class BeachComponent {

}
