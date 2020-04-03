import Note from "../../../common/model/Note";
import Api from "../network/api/Api";

class NoteController {
    getAll = () => {
        return Api.notes.get();
    }
    
    add = (note : Note) => {
        return Api.notes.post(note);
    }

    delete = (note : Note) => {
        const id = note.getId();
        if(id == null){
            throw new Error(`Note had invalid null id, can't delete.`);
        }
        return Api.notes.$(id).delete();
    }
}
export default new NoteController();