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

}
