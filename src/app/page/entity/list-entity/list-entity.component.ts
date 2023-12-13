// app/entity/list-entity.component.ts
import { Component, OnInit } from '@angular/core';
import { EntityService } from "../../../core/services/entity/entity.service";
import { Entity, PageResponse, PaginationRequest } from "../../../core/models/dto/dto";
import { AuthService } from "../../../core/services/auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.scss']
})
export class ListEntityComponent implements OnInit {
  entities: Entity[] = [];
  pageResponse: PageResponse | undefined;
  paginationRequest: PaginationRequest = { page: 0, size: 10, sort: ['asc'] };

  constructor(
    private entityService: EntityService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado antes de cargar entidades
    if (this.authService.getAuthToken()) {
      this.loadEntities();
    } else {
      // Redirigir a la página de inicio de sesión si no está autenticado
      this.router.navigate(['/login']);
    }
  }

  loadEntities() {
    this.entityService.getEntities(this.paginationRequest).subscribe(
      (response) => {
        console.log('Response:', response);
        this.pageResponse = response;
        this.entities = response.content;
      },
      (error) => {
        console.error('Error loading entities:', error);
      }
    );
  }

  onPageChange(page: number, pageSize: number) {
    this.paginationRequest.page = page;
    this.paginationRequest.size = pageSize;
    this.loadEntities();
  }

  onPageSizeChange(size: number) {
    this.paginationRequest.size = size;
    this.loadEntities();
  }

  onSortChange(sort: string[]) {
    this.paginationRequest.sort = sort;
    this.loadEntities();
  }
}
