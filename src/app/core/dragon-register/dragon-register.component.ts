import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router'
import {DragonsService} from "@shared/services/dragons-service";

@Component({
  selector: 'app-dragon-register',
  templateUrl: './dragon-register.component.html',
  styleUrls: ['./dragon-register.component.scss']
})
export class DragonRegisterComponent implements OnInit {

  loading = false;

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
  ) { }



  ngOnInit(): void {

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

    if (!this.formData.valid || !this.formData.touched) {
      return;
    }

    this.loading = true;
    this.dragonsService.createDragon(this.formData.value).subscribe( () => {

      this.formData.reset();
      this.loading = false;
      this.router.navigate(['/dragons/all']).then();
    });

  }

}


