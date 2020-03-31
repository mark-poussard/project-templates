import * as core from "express-serve-static-core";
import { Connection } from "typeorm";
import IController, { ConnectionDependentConstructor, EmptyConstructor } from "./IController";
import NoteController from "./note/NoteController";
import NoteListController from "./note/NoteListController";
import StatusController from "./status/StatusController";

const connectionDependentControllerKlasses : ConnectionDependentConstructor<IController>[] = [
    NoteController,
    NoteListController
];
const noDependencyControllerKlasses : EmptyConstructor<IController>[] = [
    StatusController
];
const getControllers = (connection : Connection) => {
    const result : IController[] = [];
    result.push(...connectionDependentControllerKlasses.map(x => new x(connection)));
    result.push(...noDependencyControllerKlasses.map(x => new x()));
    return result;
}

class ControllerRegistry{
    controllerKlasses : ConnectionDependentConstructor<IController>[] = [
        NoteController,
        NoteListController
    ]
    setupApp = (app: core.Express, connection : Connection) => {
        const controllers = getControllers(connection);
        const methods : ("get" | "patch" | "put" | "post" | "delete")[]
            = ["get", "patch", "put", "post", "delete"];
        for(let controller of controllers){
            for(const method of methods){
                const controllerMethodHandler = controller[method];
                if(controllerMethodHandler != null){
                    app[method](controller.endpoint, controllerMethodHandler);
                }
            }
        }
    }
}
export default new ControllerRegistry();