
import { PartialType } from '@nestjs/mapped-types';

import { IsString, IsEnum, IsNotEmpty, IsDateString, MaxLength } from "class-validator";
import {Expose} from "class-transformer"
import { CreateTaskDto } from './create-task.dto';
import { Status } from "../helper/Status-enum";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    id: number

    @IsString()
    @IsNotEmpty()
    @Expose()
    @MaxLength(45)
    readonly title?: string

    @IsString()
    @IsNotEmpty()
    @Expose()
    @MaxLength(200)
    readonly description?: string

    @IsEnum(Status)
    readonly status?: Status

    @IsDateString()
    @Expose()
    readonly createdAt?: Date
}
