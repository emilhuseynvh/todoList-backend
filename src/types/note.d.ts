import { z } from "zod";
import noteValidation from "../validations/note.validation";

export type NoteCreateParams = z.infer<typeof noteValidation.create>