import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router'
import { DragonsService } from "@shared/services/dragons-service";
import { IDragon } from "@shared/interfaces/dragon-service.interface";

@Component({
  selector: 'app-dragon-register',
  templateUrl: './dragon-register.component.html',
  styleUrls: ['./dragon-register.component.scss']
})
export class DragonRegisterComponent implements OnInit {

  loading = false;
  paramId: number | undefined;
  isEditing = false;

  formData: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(4)]],
      avatarUrl: ['',[Validators.required, Validators.minLength(4)]],
      history: ['', [Validators.required, Validators.minLength(4)]]
    }
  );

  constructor(
    private fb: FormBuilder,
    private dragonsService: DragonsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.paramId = Number(params['id']);
        this.isEditing = true;
      }
      console.log('isEditing', this.isEditing);

    })
  }



  ngOnInit(): void {

    if(this.isEditing) {
      this.formData.disable();
      this.dragonsService.getDragonDetail(this.paramId).subscribe((dragonData: IDragon) => {

      });
    }

  }

  get name() {
    return this.formData.get('name');
  }

  get type() {
    return this.formData.get('type');
  }

  get avatarUrl() {
    return this.formData.get('avatarUrl');
  }

  get history() {
    return this.formData.get('history');
  }

  onSubmit() {
    this.formData.disable();

    if (!this.formData.valid || !this.formData.touched) {
      return;
    }

    this.loading = true;
    if (this.isEditing) {
      const dragonData: IDragon = {
        ...this.formData.value,
        id: this.paramId
      }
      this.dragonsService.updateDragon(dragonData).subscribe( () => {
        this.formData.reset();
        this.formData.enable();
        this.loading = false;
        this.router.navigate(['/dragons/all']).then();
      });
    }


    this.dragonsService.createDragon(this.formData.value).subscribe( () => {

      this.formData.reset();
      this.formData.enable();
      this.loading = false;
      this.router.navigate(['/dragons/all']).then();
    });

  }

}


