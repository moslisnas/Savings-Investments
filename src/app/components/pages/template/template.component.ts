import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {
  templates: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTemplates().subscribe({
      next: (data) => {
        this.templates = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      },
    });
  }
}