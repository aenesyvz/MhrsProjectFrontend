import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/core/utilities/pageRequest';
import { DeleteUserOperationClaimDto, GetByIdUserOperationClaimDto, GetListUserOperationClaimDto } from 'src/app/models/DTOs/userOperationClaimDtos';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim',
  templateUrl: './user-operation-claim.component.html',
  styleUrls: ['./user-operation-claim.component.css', "../../admin-common.css"]
})
export class UserOperationClaimComponent implements OnInit {
  userOperationClaimList: GetListUserOperationClaimDto[];
  userOperationClaim: GetByIdUserOperationClaimDto;

  addForm: FormGroup;
  updateForm: FormGroup;

  id: number;
  userId: number;
  operationClaimId: number;

  pageIndex: number = 0;
  pageSize: number = 10;
  pageRequest: PageRequest = { pageIndex: this.pageIndex, pageSize: this.pageSize };

  isOpenAddModal: boolean = false;
  isOpenUpdateModal: boolean = false;

  constructor(
    private userOperationClaimService: UserOperationClaimService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.createForms();
  }

  getList() {
    this.userOperationClaimService.getList(this.pageRequest).subscribe((response) => {
      this.userOperationClaimList = response.items;
    })
  }

  getById(id: number) {
    this.userOperationClaimService.getById(id).subscribe((response) => {
      this.userOperationClaim = response;
    });
  }

  add() {
    if (this.addForm.valid) {
      let userOperationClaim = Object.assign({}, this.addForm.value);

      this.userOperationClaimService.add(userOperationClaim).subscribe((response) => {
        this.addForm.reset();
        this.getList();
      });
    }
  }

  update() {
    if (this.updateForm.valid) {
      let userOperationClaim = Object.assign({}, this.updateForm.value);

      this.userOperationClaimService.update(userOperationClaim).subscribe((response) => {
        this.updateForm.reset();
        this.getList();
      })
    }
  }

  delete(deleteUserOperationClaimDto: DeleteUserOperationClaimDto) {
    this.userOperationClaimService.delete(deleteUserOperationClaimDto).subscribe((response) => {
      this.getList();
    })
  }

  toggleAddModal() {
    this.isOpenAddModal = !this.isOpenAddModal;
  }

  toggleUpdateModal() {
    this.isOpenUpdateModal = !this.isOpenUpdateModal;
  }

  createForms() {
    this.addForm = new FormGroup({
      userId: new FormControl("", Validators.required),
      operationClaimId: new FormControl("", Validators.required)
    })
  }
}
