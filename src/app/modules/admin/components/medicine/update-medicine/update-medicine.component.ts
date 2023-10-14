import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FileHandle } from 'src/app/core/utilities/fileHandle';
import { SelectTagItemModel } from 'src/app/core/utilities/selectTagItemModel';
import { GetListMedicineCompanyDto } from 'src/app/models/DTOs/medicineCompanyDtos';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

  medicineCompanyList: SelectTagItemModel[] = [];

  updateForm: FormGroup;
  imageForm: FormGroup

  medicineCompanyId: string;
  name: string;
  purposeOfUsage: string;
  sideEffects: string;
  conditionsToBeConsidired: string;
  termsOfUse: string;
  imageUrl: string | null = "https://www.myjewishlearning.com/wp-content/uploads/2009/03/flag.jpg";

  selectedImage: SafeUrl | ArrayBuffer | null = null;

  showError: boolean = false;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  add() {
    this.showError = true;
  }

  getAllMedicineCompany() {

  }

  createForms() {
    this.updateForm = new FormGroup({
      id: new FormControl("", Validators.required),
      medicineCompanyId: new FormControl("-1", [Validators.required, Validators.min(0)]),
      name: new FormControl("", Validators.required),
      purposeOfUsage: new FormControl("", Validators.required),
      sideEffects: new FormControl("", Validators.required),
      conditionsToBeConsidired: new FormControl("", Validators.required),
      termsOfUse: new FormControl("", Validators.required),
    });

    this.imageForm = new FormGroup({
      selectedImage: new FormControl(null)
    })
  }

  previewImage(): SafeUrl | string {
    if (this.imageUrl === null && this.selectedImage === null) {
      console.log("1");

      return "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";
    } else if (this.selectedImage !== null) {
      console.log("2");
      return this.selectedImage;
    } else if (this.imageUrl !== null) {
      console.log("3");
      return this.imageUrl as SafeUrl;
    } else {
      console.log("4");
      return "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";
    }
  }



  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };
      this.selectedImage = fileHandle.url;
      event.target.value = null;
    }
  }

  deleteImage() {
    if (this.selectedImage !== null) {
      this.selectedImage = null;
      this.imageForm.controls["selectedImage"].setValue(null);
      return;
    }

    this.imageUrl = null;




  }

}
