import LocalStorage from "data/LocalStorage";
import Pokemon from "../models/pokemon";
import AuthenticationService from "./Authentication";
import adress from "app.json" ; 
import UserTeam from "models/UserTeam";

class PokemonService {

  static addToTeam(id: number) {
    LocalStorage.addToTeam(id);
    PokemonService.updateTeam();
  }

  static removeFromTeam(id: number) {
    LocalStorage.removeFromTeam(id);
    PokemonService.updateTeam();
  }

  static async updateTeam() : Promise<boolean> {
    console.log(JSON.stringify(new UserTeam(
      LocalStorage.getUsername(),
      LocalStorage.getTeam()
    )));
    return fetch("http://"+adress.ipv4+"/team/update", {
          method: 'POST',
          body: ('{"username":"+'+LocalStorage.getUsername+'+","team":'+LocalStorage.getTeam+'}'),
          headers: {
            "Content-Type" :"application/json",
            authorization : AuthenticationService.getJwt(),
          }
        }).then((ok) => ok.json())
          .catch((error)=>{
            console.error(error);
            throw error;
    })
  } 

  static async getAll(): Promise<Pokemon[]> {
    return fetch("http://"+adress.ipv4+"/pokemon/all",{
      headers: {authorization : AuthenticationService.getJwt()}
      
    }).then((pokemons) => (pokemons.json()))
      .catch((error)=>{ console.error(error);
        throw error;
      }) ; 
  };

  static async getStartWith (filter: string): Promise<Pokemon[]>  {
      return fetch("http://"+adress.ipv4+"/pokemon/?search=" + filter, {
      headers: {authorization : AuthenticationService.getJwt(),
      }
    }).then((pokemons) => pokemons.json())
      .catch((error)=>{
        console.error(error);
        throw error;
    })
  };

  static getOne = (id: string | undefined): Promise<Pokemon> => {
    return fetch("http://"+adress.ipv4+"/pokemon/"+id,{
      headers: {authorization : AuthenticationService.getJwt(),
      }
    }).then((pokemon) => pokemon.json())
      .catch((error)=>{
      console.error(error);
      throw error;
  })
  };

  static async save (newPokemon: Pokemon): Promise<boolean>  {
    return fetch("http://"+adress.ipv4+"/pokemon/edit/" + newPokemon.id, {
          method: 'POST',
          body: JSON.stringify(newPokemon
        ),
          headers: {
            "Content-Type" :"application/json",
            authorization : AuthenticationService.getJwt(),
          }
        }).then((ok) => ok.json())
          .catch((error)=>{
            console.error(error);
            throw error;
    })
  } 
}

export default PokemonService;
