import { Controller } from "@nestjs/common";

@Controller()
export class UserController {
    constructor(private readonly service) {}
}