import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  figurines: any[] = [];
  constructor (private produitService: ProduitsService) {}

  ngOnInit(): void {
    this.figurines = this.produitService.figurines
  }
}
