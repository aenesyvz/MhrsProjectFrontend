import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { DeleteOperationClaimDto, GetByIdOperationClaimDto, GetListOperationClaimDto } from 'src/app/models/DTOs/operationClaimDtos';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrls: ['./operation-claim.component.css', "../../admin-common.css", "../add-and-update-modal/add-and-update-modal.component.css"]
})
export class OperationClaimComponent implements OnInit {
  operationClaimList: GetListOperationClaimDto[];
  operationClaim: GetByIdOperationClaimDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  id: number;
  name: string;

  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: 0, pageSize: 10 }

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;
  showError: boolean = false;

  constructor(
    private operationClaimService: OperationClaimService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.operationClaimService.getList(this.pageRequest).subscribe((response) => {
      this.operationClaimList = response.items;
    })
  }

  getById(id: number) {
    this.operationClaimService.getById(id).subscribe((response) => {
      this.operationClaim = response;
    })
  }

  add() {
    if (this.addForm.valid) {
      let operationClaim = Object.assign({}, this.addForm.value);

      this.operationClaimService.add(operationClaim).subscribe((response) => {
        this.addForm.reset();
        this.getList();
      })
    }
  }
  update() {
    if (this.updateForm.valid) {
      let operationClaim = Object.assign({}, this.updateForm.value);

      this.operationClaimService.update(operationClaim).subscribe((response) => {
        this.updateForm.reset();
        this.getList();
      })
    }
  }

  delete(deleteOperationClaimDto: DeleteOperationClaimDto) {
    this.operationClaimService.delete(deleteOperationClaimDto).subscribe((response) => {
      this.getList();
    })
  }

  openAddModal() {
    this.isOpenAddModal = true;
    this.createAddForm();
  }

  closeAddModal() {
    this.isOpenAddModal = false;
    this.addForm.reset();
    this.showError = false;
  }

  openUpdateModal(operationClaim: GetListOperationClaimDto) {
    this.operationClaim = operationClaim;
    this.isOpenUpdateModal = true;
    this.createUpdateForm();


  }

  closeUpdateModal() {
    this.isOpenUpdateModal = false;
    this.showError = false;
    this.updateForm.reset();
  }

  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required)
    });
  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      id: new FormControl(this.operationClaim.id, Validators.required),
      name: new FormControl(this.operationClaim.name, Validators.required)
    });

  }
}
