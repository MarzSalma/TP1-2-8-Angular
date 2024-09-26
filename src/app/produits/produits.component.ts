import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits: string[];

  constructor() {
    this.produits = ['PC Asus', 'Imprimante Epson', 'Tablette Samsung'];
  }
  ngOnInit(): void {}
}
