import Pokemon from "../models/pokemon";
import AuthenticationService from "./Authentication";
import adress from "app.json" ; 

class PokemonService {

  static addToTeam(id: any): ((event: import("react-native").GestureResponderEvent) => void) | undefined {
      throw new Error("Method not implemented.");
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
