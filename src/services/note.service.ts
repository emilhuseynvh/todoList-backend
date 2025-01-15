import { NoteCreateParams } from "../types/note";
import { dataSource } from "../database";
import { Note } from "../database/entity/Note";
import { User } from "../database/entity/User";
import { NotFoundError } from "../utils/error.util";

const create = async (userId: any, params: NoteCreateParams) => {
    const noteRepo = dataSource.getRepository(Note);
    const userRepo = dataSource.getRepository(User);

    const user: any = await userRepo.findOne({ where: { id: userId.id }, select: ['id', 'username'] });
    const note =  noteRepo.create({ ...params, user  });
    

    await noteRepo.save(note);
    return note
}

const deleteNote = async (id: number) => {
    const noteRepo = dataSource.getRepository(Note);

    let deletedNote = await noteRepo.delete(id);

    if(!deletedNote) throw new NotFoundError('note is not found'); 

    return { message: 'note is deleted succesfully' };
}

const noteService = {
    create,
    deleteNote
}

export default noteService;