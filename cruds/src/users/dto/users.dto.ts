import { IsString, MinLength, MaxLength } from 'class-validator';
export class UsersDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;
}