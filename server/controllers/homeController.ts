import {Controller, Get, Route, Response, Request} from "@codeunic/api";

@Controller
@Route("/")
class HomeController {

    constructor(req: Request, res: Response) {

    }

    @Get("/")
    welcome(req: Request, res: Response) {
        res.end("hello World");
    }
}
