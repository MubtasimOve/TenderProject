import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import * as moment from 'moment';
import { extname } from "path";

import { AdminForm } from "./DTOs/admindto";
import { AdminService } from "./services/admin.service";
import * as fs from 'fs';
import { SessionGuard } from "./session.guard";
import { Request, Response } from 'express';


@Controller("/Admin")
export class AdminController {
    constructor(private adminService: AdminService) { }

    //Admin CRUD

    @UseGuards(SessionGuard)
    @Get("/index")

    getAdminIndex(): any {
        return this.adminService.getIndex();
    }

    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.getTadminProfile(id);
    }

    @Get("/viewprofilebyemail/:email")
    getUserByemail(@Param("email") email: string): any {
        return this.adminService.getTadminProfilebyemail(email);
    }

    @Get('/getimage/:name')
    getImages(@Param('name') name, @Res() res) {
        res.sendFile(name, { root: './Images' })
    }

    @Put("/update")
    @UsePipes(new ValidationPipe())
    async update(@Body() admindto: AdminForm) {
        return this.adminService.update(admindto, admindto.id);
    }

    


   


    @Post("/signup")
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('myfile', { dest: 'tmp/' }))
    async create(@UploadedFile() file: Express.Multer.File, @Body() tmdto: AdminForm) {


        if (file) {
            const filename = `${moment().format('YYYYMMDDHHmmss')}${extname(file.originalname)}`;
            tmdto.ImgfileName = filename;
            const tmpFilePath = file.path; // temporary path of the uploaded file
            const destFilePath = `Images/${filename}`;
            await fs.promises.mkdir('Images', { recursive: true }); // create Images folder if it doesn't exist
            await fs.promises.rename(tmpFilePath, destFilePath); // move the file to the Images folder
        }

        return await this.adminService.insert(tmdto);
    }


    @Post('/signin')
    async signin(@Session() session, @Body('email') email: string, @Body('password') password: string) {
      

       var b=await this.adminService.signin(email, password);
       if (b) {
           session.email = email;
           return session.email;
       } else {        
           return 0;
       }
   }



   @Delete("/delete/:id")
   deleteAdminById(@Param("id", ParseIntPipe) id: number): any {
       return this.adminService.deleteAdminById(id);
   }

    @Get('/signout')
    signout(@Session() session, @Res() res: Response) {
        session.destroy((err) => {
            if (err) {
                throw new Error('Failed to destroy session');
            }
            res.setHeader('Set-Cookie', ['connect.sid=; Max-Age=-1; Path=/; HttpOnly']);
            res.status(200).json({ message: 'Logged out successfully' });
        });
    }


}
