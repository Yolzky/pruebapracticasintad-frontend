import { Component } from '@angular/core';
import {PageResponse, PaginationRequest, TaxPayerType} from "../../../core/models/dto/dto";
import {TaxPayerTypeService} from "../../../core/services/tax-payer-type/tax-payer-type.service";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  TaxPayerTypeDetailsModalComponent
} from "../tax-payer-type-details-modal/tax-payer-type-details-modal.component";

@Component({
  selector: 'app-list-tax-payer',
  templateUrl: './list-tax-payer.component.html',
  styleUrls: ['./list-tax-payer.component.scss']
})
export class ListTaxPayerComponent {


  taxPayerTypes: TaxPayerType[]= [];
  pageResponse: PageResponse | undefined;
  paginationRequest: PaginationRequest = {page: 0, size: 10, sort: ['asc']};

  constructor(
    private taxPayerTypeService: TaxPayerTypeService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    if (this.authService.getAuthToken()) {
      console.log('User is logged in')
      this.loadTaxPayerTypes();
    } else {
      console.log('User is not logged in')
      this.loadTaxPayerTypes();
      //this.router.navigate(['/login']);
    }
  }

  loadTaxPayerTypes(){
    console.log('Loading entities')
    this.taxPayerTypeService.getTaxPayerTypes(this.paginationRequest).subscribe(
      (response) => {
        console.log('Response:', response);
        this.pageResponse = response;
        this.taxPayerTypes = response.content;
      },
      (error) => {
        console.error('Error loading entities:', error);
      }
    );
  }
  onPageChange(page: number, pageSize: number) {
    this.paginationRequest.page = page;
    this.paginationRequest.size = pageSize;
    this.loadTaxPayerTypes();
  }

  openDetailsModal(taxPayerType: TaxPayerType) {
    console.log('Opening details modal for tax payer Type:', taxPayerType);
    const dialogRef = this.dialog.open(TaxPayerTypeDetailsModalComponent, {
      data: {taxPayerType, index: 0},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal de edición cerrado', result);
    });

  }


}
