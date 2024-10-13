import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-index-template',
  standalone: true,
  imports: [],
  templateUrl: './index-template.component.html',
  styleUrl: './index-template.component.css',
})
export class IndexTemplateComponent implements OnInit {
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
