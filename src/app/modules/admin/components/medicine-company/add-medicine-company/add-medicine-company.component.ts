import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicineCompanyService } from 'src/app/services/medicine-company.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';
import { FileHandle } from 'src/app/core/utilities/fileHandle';
@Component({
  selector: 'app-add-medicine-company',
  templateUrl: './add-medicine-company.component.html',
  styleUrls: ['./add-medicine-company.component.css']
})
export class AddMedicineCompanyComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

  addForm: FormGroup;

  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  taxOffice: string;
  taxNumber: string;
  imageUrl: SafeUrl | ArrayBuffer | null = null;

  showError: boolean = false;

  selectedImage: SafeUrl | ArrayBuffer | null = null;

  constructor(
    private medicineCompanyService: MedicineCompanyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms() {
    this.addForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      address: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      phoneNumber: new FormControl("", Validators.required),
      taxOffice: new FormControl("", Validators.required),
      taxNumber: new FormControl("", Validators.required),
      selectedImage: new FormControl("")
    })
  }

  add() {
    if (this.addForm.valid) {
      let medicineCompany = Object.assign({}, this.addForm.value);
      console.log(this.addForm.value);

      // this.medicineCompanyService.add(medicineCompany).subscribe((response) => {
      //   this.showError = false;
      // });
    } else {
      this.showError = true;
    }
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
      this.selectedImage = fileHandle.url;
      event.target.value = null;
    }
  }

  deleteImage() {
    this.selectedImage = "";
    this.addForm.controls["selectedImage"].setValue("");
  }
}


