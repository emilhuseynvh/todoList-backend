import { NextFunction, Request, Response } from "express";
import noteService from "../services/note.service";
import { AuthorizedRequest } from "../types/auth";
import { any, number } from "zod";

const create = async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    try{
        const note = await noteService.create(req.user, req.body);
        res.json({ message: 'note created succesfully', note });
    } catch (err) {
        next(err);
    }
}

const deleteNote = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const deletedNote = await noteService.deleteNote(Number(req.params.id) as number)

        res.json(deletedNote);
    } catch (err) {
        next(err);
    }
}

const noteController = {
    create,
    deleteNote
}

export default noteController;