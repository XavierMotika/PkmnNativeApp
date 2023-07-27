
import PokemonType from "../models/pokemonType";
import AuthenticationService from "./Authentication";
import adress from "app.json";

class PokemonTypeService {
  static types: PokemonType[];

  static async loadTypes(): Promise<PokemonType[]>{
    return fetch ("http://"+adress.ipv4+"/type/all",{
      headers : {authorization : AuthenticationService.getJwt()} 
    })
    .then((response)=> response.json())
    .catch((error)=>{
      console.error(error);
      throw error;
    }) ; 
  }

  static async getTypes() : Promise<PokemonType[]> {
    if (this.types === undefined) {
      await this.loadTypes().then((typeList) => {
        this.types = typeList;
      });
    }
    return new Promise((resolve) => resolve(this.types));
  }

}

export default PokemonTypeService;
