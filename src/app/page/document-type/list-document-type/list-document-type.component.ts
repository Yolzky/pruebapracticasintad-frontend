import {Component, OnInit} from '@angular/core';
import {PageResponse, PaginationRequest, DocumentType} from "../../../core/models/dto/dto";
import {DocumentTypeService} from "../../../core/services/document-type/document-type.service";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DocumentTypeDetailsModalComponent} from "../document-type-details-modal/document-type-details-modal.component";

@Component({
  selector: 'app-list-document-type',
  templateUrl: './list-document-type.component.html',
  styleUrls: ['./list-document-type.component.scss']
})
export class ListDocumentTypeComponent implements OnInit {
  documentTypes: DocumentType[] = [];
  pageResponse: PageResponse | undefined;
  paginationRequest: PaginationRequest = {page: 0, size: 10, sort: ['asc']};

  constructor(
    private documentTypeService: DocumentTypeService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.authService.getAuthToken()) {
      console.log('User is logged in')
      this.loadDocumentTypes();
    } else {
      console.log('User is not logged in')
      this.loadDocumentTypes();
      //this.router.navigate(['/login']);
    }
  }

  loadDocumentTypes(){
    console.log('Loading entities')
    this.documentTypeService.getDocumentTypes(this.paginationRequest).subscribe(
      (response) => {
        console.log('Response:', response);
        this.pageResponse = response;
        this.documentTypes = response.content;
      },
      (error) => {
        console.error('Error loading entities:', error);
      }
    );
  }
  onPageChange(page: number, pageSize: number) {
    this.paginationRequest.page = page;
    this.paginationRequest.size = pageSize;
    this.loadDocumentTypes();
  }

  openDetailsModal(documentType: DocumentType) {
    console.log('Opening details modal for document Type:', documentType);
    const dialogRef = this.dialog.open(DocumentTypeDetailsModalComponent, {
      data: {documentType, index: 0},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal de edición cerrado', result);
    });

  }
}
