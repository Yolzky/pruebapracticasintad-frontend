import {Component, OnInit} from '@angular/core';
import {EntityService} from "../../../core/services/entity/entity.service";
import {Entity, PageResponse, PaginationRequest} from "../../../core/models/dto/dto";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from '@angular/router';
import {DetailsModalComponent} from "../details-modal/details-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {EditEntityComponent} from "../edit-entity/edit-entity.component";

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.scss']
})
export class ListEntityComponent implements OnInit {
  entities: Entity[] = [];
  pageResponse: PageResponse | undefined;
  paginationRequest: PaginationRequest = {page: 0, size: 10, sort: ['asc']};

  constructor(
    private entityService: EntityService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    if (this.authService.getAuthToken()) {
      console.log('User is logged in')
      this.loadEntities();
    } else {
      console.log('User is not logged in')
      this.loadEntities();
      //this.router.navigate(['/login']);
    }
  }

  loadEntities() {
    console.log('Loading entities')
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

  openDetailsModal(entity: Entity) {
    console.log('Opening details modal for entity:', entity);
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: {entity, index: 0},
    });
  }

  openEditModal(entity: any): void {
    const dialogRef = this.dialog.open(EditEntityComponent, {
      width: '1000px',
      data: {entity},
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadEntities();
    });
  }

}
