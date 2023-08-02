export default class User {
    username: string;
    role : string;
    team : number[];

    constructor(username : string, role : string, team : number[]) {
        this.username = username;
        this.role = role;
        this.team = team
    }
    
}