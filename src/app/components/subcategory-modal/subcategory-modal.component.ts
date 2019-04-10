import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-subcategory-modal',
  templateUrl: './subcategory-modal.component.html',
  styleUrls: ['./subcategory-modal.component.css']
})
export class SubcategoryModalComponent implements OnInit {

  constructor(private subCategoryref:MatDialogRef<SubcategoryModalComponent>) { }

  ngOnInit() {
  }

}
