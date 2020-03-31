import IController, { BASE_ENDPOINT } from "../IController";
import { Request, Response } from "express";
import ServerStatus from "../../../common/model/ServerStatus";

export default class StatusController implements IController{
    static readonly ENDPOINT = BASE_ENDPOINT + "/status";
    readonly endpoint = StatusController.ENDPOINT;

    get = (req: Request, res: Response) => {
        res.send(new ServerStatus());
    }
}