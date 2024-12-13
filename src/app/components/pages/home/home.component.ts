import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Template } from '../../../models/Template';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lastTemplate: Template = new Template(); //"Year 2024";
}
