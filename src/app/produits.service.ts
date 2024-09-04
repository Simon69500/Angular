import { Injectable } from '@angular/core';
import { Figurine } from './figurine.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  figurines: Figurine[] = [
    { name: "Figurine Astérix le Gaulois",
      prix: "25€", 
      description: "Astérix, tenant fièrement Idéfix dans sa main, est prêt pour l’aventure avec sa potion magique accrochée à sa ceinture. Cette figurine détaillée illustre parfaitement le duo inséparable et le courage d’Astérix, fidèle à son style emblématique. .",
      dimension: "12cm",
      image: "assets/Asterix.jpg"
    },

    { name: "Figurine Obélix le Gaulois", 
      prix: "23€", 
      description: "Obélix, les mains dans les poches, affiche une moue boudeuse après que Panoramix a refusé de lui donner de la potion magique. Cette figurine détaillée capture parfaitement son attitude frustrée tout en restant fidèle à son look iconique. Un ajout amusant à toute collection !", 
      dimension: "12cm",
      image: "assets/Obelix.jpg"
    },

    { name: "Figurine Panoramix le Druide", 
      prix: "20€", 
      description: " Panoramix, en pleine marche avec sa louche en main et son chaudron au bras gauche, se prépare à concocter une nouvelle potion magique. Cette figurine détaillée capture le druide dans toute sa préparation, fidèle à son rôle clé dans les aventures d’Astérix.",
      dimension: "12cm", 
      image: "assets/Panoramix.jpg"
    },

  ];
  constructor() { }
}


