import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  public alunos = [
    {nome:'Jhonny'},
    {nome:'Michael'},
    {nome:'Debora'},
    {nome:'Milena'},
    {nome:'Ali'},
    {nome:'Nagila'},
    {nome:'Matheus'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
