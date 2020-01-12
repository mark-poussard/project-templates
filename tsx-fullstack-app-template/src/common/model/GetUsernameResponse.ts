export default class GetUsernameResponse{
    private username : string;

    constructor(username : string){
        this.username = username;
    }

    getUsername = () => this.username;

    static deserialize = (dto : any) => {
        return new GetUsernameResponse(dto.username);
    }
}