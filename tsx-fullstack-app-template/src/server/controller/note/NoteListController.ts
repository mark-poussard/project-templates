import IController, { BASE_ENDPOINT } from "../IController";
import { Request, Response } from "express";
import { Connection } from "typeorm";
import Note from "../../../common/model/Note";

export default class NoteListController implements IController{
    static readonly ENDPOINT = BASE_ENDPOINT + "/notes";
    readonly endpoint = NoteListController.ENDPOINT;

    private connection : Connection;

    constructor(connection : Connection){
        this.connection = connection;
    }

    get = (req: Request, res: Response) => {
        this.connection.getRepository(Note).find()
            .then(notes => res.send(notes));
    }

    post = (req: Request, res: Response) => {
        const note = Note.deserialize(req.body);
        this.connection.getRepository(Note).save(note)
            .then(note => res.send(note));
    }
}