import Request from "./model/Request";
import Response from "./model/Response";

class Controller{

    execute = (req : Request) : Promise<Response> => {
        return Promise.resolve(new Response());
    }

}
export default new Controller();