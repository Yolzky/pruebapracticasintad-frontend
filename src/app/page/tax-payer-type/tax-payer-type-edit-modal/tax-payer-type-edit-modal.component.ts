import {Component, Inject, OnInit} from '@angular/core';
import {TaxPayerType} from "../../../core/models/dto/dto";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaxPayerTypeService} from "../../../core/services/tax-payer-type/tax-payer-type.service";
@Component({
  selector: 'app-tax-payer-type-edit-modal',
  templateUrl: './tax-payer-type-edit-modal.component.html',
  styleUrls: ['./tax-payer-type-edit-modal.component.scss']
})
export class TaxPayerTypeEditModalComponent implements OnInit{

  taxPayerType: TaxPayerType;

  constructor(
    private dialogRef: MatDialogRef<TaxPayerTypeEditModalComponent>,
    private taxPayerTypeService: TaxPayerTypeService,
    @Inject(MAT_DIALOG_DATA) public data: { taxPayerType: TaxPayerType },
  ) {
    this.taxPayerType = data.taxPayerType;
  }
  ngOnInit(): void {
  }

  onSave(): void {
    this.taxPayerTypeService.updateTaxPayerType(this.taxPayerType).subscribe(() => {
      this.dialogRef.close();
    });
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
