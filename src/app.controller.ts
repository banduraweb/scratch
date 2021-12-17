import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/test')
    getRootRoute() {
        return "hello"
    }
}