import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//IMPORTAR SERVIÇO
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  //a requisição será guardada dentro do array
  contacts: Contact[] = [];

  //INJETAR O SERVIÇO
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
      this.contactsService.listContact().subscribe(contacts =>{
        this.contacts = contacts;
      }); //observer + callback
  }

  deleteContact(contact: Contact){
    this.contactsService.deleteContact(contact.id).subscribe(()=>{
      const index = this.contacts.indexOf(contact); //PROCURAR O INDEX DELE
      this.contacts.splice(index,1);//apagar o indice da lista
    })

  }
}
