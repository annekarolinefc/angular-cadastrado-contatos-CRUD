import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//3º) Definir a urlBase
const urlBase="http://localhost:3000";

//2º) Descrever o objeto atraves de uma interface
  export interface Contact{
    id: number,
    name: string,
    phone: string,
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  //1º) O serviço vai ser injetado
  constructor(private http: HttpClient) { }

  //4º) Importando as operações

  //LISTAR O CONTATOS
  listContact(){
    return this.http.get<Contact[]>(`${urlBase}/contacts`); //retorna um array de objetos
    }

  //OBTER UM UNICO CONTATO específico
  retrieveContact(id: number){
    return this.http.get<Contact>(`${urlBase}/contacts/${id}`); //retorna um objetos
  }

  //CRIAR UM CONTATO
  createContact(contact: Contact){
    return this.http.post<Contact>(`${urlBase}/contacts`, contact) //retorna um objeto
  }

  //ATUALIZAR UM CONTATO
  updateContact(contact: Contact){
    return this.http.put<Contact>(`${urlBase}/contacts/${contact.id}`, contact) //retorna um objeto
  }

  //DELETAR UM CONTATO
  deleteContact(id: number){
    return this.http.delete(`${urlBase}/contacts/${id}`) //não retorna um objeto
  }

}
