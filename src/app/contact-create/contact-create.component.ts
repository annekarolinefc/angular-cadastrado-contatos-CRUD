import { ContactsService } from './../contacts.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent{

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),//inicializa com o campo vazio e é obrigatorio
    phone: new FormControl('', Validators.required)
  })

  constructor( private contactsService: ContactsService, private router: Router) { }

  createContact(): void {
    //para pegar o contato: this.contacForm.value
    this.contactsService.createContact(this.contactForm.value).subscribe(contact=>{
      //após adicionar o contato, retorna para a lista de contatos
      this.router.navigate(["/contacts"]);
    })

  }
}
