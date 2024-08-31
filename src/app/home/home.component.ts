import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Figurine } from '../figurine.model'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  figurines: Figurine[] = [];
  filteredItems: Figurine[] = [];
  searchTerm: string = '';

  constructor(private produitService: ProduitsService) {}

  ngOnInit(): void {
    this.figurines = this.produitService.figurines;
    this.filteredItems = this.figurines; // Initialement, tous les éléments sont affichés
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filteredItems = this.figurines.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  sortByPrice(order: 'asc' | 'desc'): void {
    this.filteredItems.sort((a, b) => {
      const priceA = parseFloat(a.prix.replace('€', '').replace(',', '.'));
      const priceB = parseFloat(b.prix.replace('€', '').replace(',', '.'));
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }
}
