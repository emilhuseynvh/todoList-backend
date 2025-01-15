import { z } from "zod";

const create = z.object({
    content: z.string().min(5)
})


const noteValidation = {
    create,
}

export default noteValidation;