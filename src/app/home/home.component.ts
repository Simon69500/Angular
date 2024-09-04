import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Figurine } from '../figurine.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  figurines: Figurine[] = [];
  filteredItems: Figurine[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private produitService: ProduitsService) {}

  ngOnInit(): void {
    this.figurines = this.produitService.figurines;
    this.filteredItems = this.figurines; 
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filteredItems = this.figurines.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
