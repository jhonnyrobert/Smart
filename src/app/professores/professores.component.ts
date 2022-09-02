import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {


  titulo = 'Professores';
  public professores = [
    {id: 1, nome:'Joao', disciplina:'MTM'},
    {id: 2, nome:'Marcos', disciplina:'PTG'},
    {id: 3, nome:'Thiago', disciplina:'GEO'},
    {id: 4, nome:'Daine', disciplina:'ING'},
    {id: 5, nome:'Lorena', disciplina:'ART'},
    {id: 6, nome:'Rayane', disciplina:'HST'},
    {id: 7, nome:'Carolina', disciplina:'BIO'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
