import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FileHandle } from 'src/app/core/utilities/fileHandle';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

  medicineCompanyList: SelectTagItemModel[] = [];

  addForm: FormGroup;
  imageForm: FormGroup

  medicineCompanyId: string;
  name: string;
  purposeOfUsage: string;
  sideEffects: string;
  conditionsToBeConsidired: string;
  termsOfUse: string;

  imageFile: SafeUrl | ArrayBuffer | null = null;

  showError: boolean = false;

  createForms() {
    this.addForm = new FormGroup({
      medicineCompanyId: new FormControl("-1", [Validators.required, Validators.min(0)]),
      name: new FormControl("", Validators.required),
      purposeOfUsage: new FormControl("", Validators.required),
      sideEffects: new FormControl("", Validators.required),
      conditionsToBeConsidired: new FormControl("", Validators.required),
      termsOfUse: new FormControl("", Validators.required),
    });

    this.imageForm = new FormGroup({
      imageFile: new FormControl(null)
    })
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.createForms();
  }

  add() {
    this.showError = true;
  }

  getAllMedicineCompany() {

  }

  onFileSelected(event: any) {
    console.log(event.target.files);

    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };
      this.imageFile = fileHandle.url;
      event.target.value = null;
    }
  }

  deleteImage() {
    this.imageFile = null;
    this.addForm.controls["selectedImage"].setValue(null);
  }

}
