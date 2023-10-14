import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FileHandle } from 'src/app/core/utilities/fileHandle';
import { MedicineCompanyService } from 'src/app/services/medicine-company.service';
import { ValidateSchema } from 'src/app/shared/validator/validate-schema';

@Component({
  selector: 'app-update-medicine-company',
  templateUrl: './update-medicine-company.component.html',
  styleUrls: ['./update-medicine-company.component.css']
})
export class UpdateMedicineCompanyComponent implements OnInit {
  validationSchema: ValidateSchema = new ValidateSchema();

  updateForm: FormGroup;
  imageForm: FormGroup;

  id: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  taxOffice: string;
  taxNumber: string;
  imageUrl: string | null = "https://www.myjewishlearning.com/wp-content/uploads/2009/03/flag.jpg";

  selectedImage: SafeUrl | ArrayBuffer | null = null;

  showError: boolean = false;

  constructor(
    private medicineCompanyService: MedicineCompanyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms() {
    this.updateForm = new FormGroup({
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
    });

    this.imageForm = new FormGroup({
      selectedImage: new FormControl(null)
    });
  }

  update() {
    if (this.updateForm.valid) {
      let medicineCompany = Object.assign({}, this.updateForm.value);
      if (this.imageForm.valid) {
        console.log(this.imageForm.value);

      }
      this.medicineCompanyService.update(medicineCompany).subscribe((response) => {
        this.showError = false;



        //VAR olan resim güncelleneceği zaman

        //İLK defa resim yüklenileceği zaman

        //SİLMEK istenildiği zaman

        //Resimde değişiklik yapılmadığı zaman
      });
    } else {
      this.showError = true;
    }
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
