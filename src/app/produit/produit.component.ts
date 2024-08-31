import { Component, OnInit } from '@angular/core';

import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent implements OnInit {
  figurines: any[] = [];
  constructor (private produitService: ProduitsService) {}

  ngOnInit(): void {
    this.figurines = this.produitService.figurines
  }
}
