import { RequestHandler } from "express";
import { Connection } from "typeorm";

export const BASE_ENDPOINT = "/api"

export default interface IController{
    readonly endpoint : string;
    
    get ?: RequestHandler;
    post ?: RequestHandler;
    put ?: RequestHandler;
    patch ?: RequestHandler;
    delete ?: RequestHandler;
}

export type ConnectionDependentConstructor<T> = new (connection : Connection) => T;
export type EmptyConstructor<T> = new () => T;