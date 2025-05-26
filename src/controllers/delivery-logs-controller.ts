import { Response , Request } from "express";

class DeliveryLogsController {
    async create(requeste:Request, response: Response){
        return response.json({message: "ok"})
    }
}

export {DeliveryLogsController}