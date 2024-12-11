import { Component } from '@angular/core';
import {AlertController, IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from
'@angular/forms';
import { DatabaseService } from '../service/database.service';
@Component({
selector: 'app-tab1',
templateUrl: 'tab1.page.html',
styleUrls: ['tab1.page.scss'],
standalone: true,
imports: [IonicModule, ReactiveFormsModule],
})
export class Tab1Page {
formGroup: FormGroup = this.fb.group({
nome: ['', Validators.required],
telefone: [''],
email: ['', Validators.email],
hobby: ['']
})
  
constructor(private fb: FormBuilder, 
  private databaseService: DatabaseService,
 private alertController: AlertController
) { }
async salvar() {
  if (this.formGroup.valid) {
  this.databaseService.set("pessoa", JSON.stringify(this.formGroup.value))
  const alert = await this.alertController.create({
  header: 'Item salvo',
  message: 'Item salvo com sucesso',
  buttons: ['OK']
  })
  await alert.present()
  } else {
  alert('Formulário inválido')
  }
  }
}