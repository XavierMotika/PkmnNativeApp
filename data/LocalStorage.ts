import Pokemon from "models/pokemon";

class LocalStorage {

    public static newPokemon : Pokemon | undefined = undefined;

    private static username : string = "";
    private static token : string  = "";
    private static expiration: string  = "";
    private static role: string  = "";
    private static reloaded: string  = ""; 
    private static team : number[] = [];

    static setUsername = (pUsername : string) => {
        this.username = pUsername
    }
    
    static setToken = (pToken : string) => {
        this.token = pToken;
    }
    static setExpiration = (pExpiration : string ) => {
        this.expiration = pExpiration;
    }
    static setRole = (pRole : string ) => {
        this.role = pRole;
    }
    static setReloaded = (pReloaded : string ) => {
        this.reloaded = pReloaded;
    }

    static setTeam(pTeam: number[]) {
        this.team = pTeam;
      }

    static getUsername = () => {
        return this.username;
    }

    static getToken = () => {
        return this.token;
    }
    static getExpiration = () => {
        return this.expiration;
    }
    static getRole = () => {
        return this.role;
    }
    static getReloaded = () => {
        return this.reloaded;
    }

    static getTeam = () => {
        return this.team;
    }

    static resetStorage = () => {
        this.token  = "";
        this.expiration = "";
        this.role = "";
        this.reloaded = "true";
        this.username = "";
        this.team = [];
    }

    static sendPokemon(newPokemon: Pokemon): void {
        this.newPokemon = newPokemon;
    }

    static getPokemon() : Pokemon | undefined {
        return this.newPokemon;
    }

    static addToTeam(pId : number) {
        this.team.push(pId);
    }

    static removeFromTeam(pId : number){
        let newTeam : number[] = this.team;
        newTeam.splice(newTeam.indexOf(pId),1)
        this.team = newTeam
    }

} export default LocalStorage;