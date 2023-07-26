
import LocalStorage from "data/LocalStorage";
import LoginRequest from "../models/security/loginRequest";
import LoginResponse from "../models/security/loginResponse";


class AuthenticationService {
  
  // sert à accéder au back de l'application et permet de récuperer les informations présentes 
  // grace aux informations données dans le login. Ces informations sont stockées dans le body
  // d'une requête de type POST, response est renvoyé sous forme de json.
  static async call(login: LoginRequest): Promise<LoginResponse | undefined> {
    const response = await fetch("http://10.188.197.139:8080/auth/signin", {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return await response.json();
    }
  }
  // sert de point d'entree, prend en paramètre un username et un password, promet de renvoyer un boolean
  // dans un futur plus ou moins proche. On attend la réponse avant d'aller plus loin. On fait appelle 
  // à la methode call qui prend en paramètre un objet LoginRequest (qui prend en parametre ces username/password)
  // elle sont assignées à response. On peut stocker le contenu de la réponse dans le localStorage, pour cela
  // on a besoin d'une clée (string) et de la donnée (également un string, qui reprends la donnée de response)
  // dans notre cas. On en profite pour ajoute un "boolean" pour le rechargement de la page.
  static async login(username: string, password: string): Promise<boolean> {
    await this.call(new LoginRequest(username, password)).then((response) => {
      if (response !== undefined) {
        LocalStorage.setToken(response.jwt);
        LocalStorage.setExpiration(response.expiration);
        LocalStorage.setRole(JSON.stringify(response.user));
        LocalStorage.setReloaded("false");
      }
    });
    // On retourne la promesse de type boolean (le resolve) par la methode isAuthenticated au bout de 
    // 1000 ms 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuthenticated());
      }, 1000);
    });
  }
  
//
//
  static isAuthenticated(): boolean {
    const expiration = LocalStorage.getExpiration();
    const jwt = LocalStorage.getToken();

    if (expiration !== null && Date.parse(expiration)>Date.now() && jwt !== null){
      
      return jwt !== undefined; 
    } else {
      LocalStorage.setToken("");
      LocalStorage.setExpiration("");
      LocalStorage.setRole("");
      if (LocalStorage.getReloaded()!== 'true'){
        
        LocalStorage.setReloaded('true');
      }
      return false;
    }
  }

  static getJwt() : any {
    this.isAuthenticated()
    return LocalStorage.getToken();
  }

}

export default AuthenticationService;
