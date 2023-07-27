class LocalStorage {

    private static token : string  = "";
    private static expiration: string  = "";
    private static role: string  = "";
    private static reloaded: string  = ""; 
    
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

    static resetStorage = () => {
        this.token  = "";
        this.expiration = "";
        this.role = "";
        this.reloaded = "true";
    }



} export default LocalStorage;