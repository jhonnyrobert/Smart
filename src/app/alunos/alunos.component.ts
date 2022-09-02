import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  public alunos = [
    {id:1, nome: 'Jhonny', sobrenome: 'Teste1', telefone: '(98) 99991234' },
    {id:2, nome: 'Michael', sobrenome: 'Teste2', telefone: '(98) 88994567' },
    {id:3, nome: 'Debora', sobrenome: 'Teste3', telefone: '(98) 77997890' },
    {id:4, nome: 'Milena', sobrenome: 'Teste4', telefone: '(98) 66993214' },
    {id:5, nome: 'Ali', sobrenome: 'Teste5', telefone: '(98) 55997654' },
    {id:6, nome: 'Nagila', sobrenome: 'Teste6', telefone: '(98) 44995566' },
    {id:7, nome: 'Matheus', sobrenome: 'Teste7', telefone: '(98) 33992244' }
  ]


  constructor() { }

  ngOnInit() {
  }

}
