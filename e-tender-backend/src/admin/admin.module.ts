import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller"
import { AdminEntity } from "./entities/admin.entity";
import { AdminService } from "./services/admin.service"

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminController],
    providers: [AdminService],

})

export class AdminModule { }