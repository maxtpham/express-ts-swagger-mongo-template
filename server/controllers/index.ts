import * as express from "express";

export module Route {
    export class Index {
        static get(req: express.Request, res: express.Response) {
            res.json(JSON.parse('{"title":"index", "message":"GET: Index"}'));
        }
    }
}
