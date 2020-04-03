import { API_ENDPOINT } from "./ApiConst";
import { get, post, del } from "../JsonApiEndpoint";
import Note from "../../../../common/model/Note";
import { arrayHandler } from "../../../../common/model/deserialization/DeserializationUtils";

export const NOTES_API_ENDPOINT = API_ENDPOINT + "/notes";

const NotesApi = {
    get : get(NOTES_API_ENDPOINT, arrayHandler(Note.deserialize)),
    post : post(NOTES_API_ENDPOINT, Note, Note.deserialize),
    $ : (id : number) => ({
        delete : del(`NOTES_API_ENDPOINT/${id}`, Note.deserialize)
    })
}
export default NotesApi;