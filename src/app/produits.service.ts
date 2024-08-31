import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
 figurines = [
  {name:"Asterix", prix:"25€", description:"Une figurine d\'Asterix", image:"assets/Asterix.jpg"},
  {name:"Obelix", prix:"23€", description:"Une figurine d\'Obelix", image:"assets/Obelix.jpg"},
  {name:"Panoramix", prix:"20€", description:"Une figurine de Panoramix", image:"assets/Panoramix.jpg"},
 ]
  constructor() { }
}


