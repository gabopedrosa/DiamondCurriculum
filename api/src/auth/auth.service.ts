import { User } from './../user/models/user.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}
    
    generateJWT(user: User): Observable <string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable <string> {
        return from<string>(bcrypt.hash(password, 12));
    }

    comparePasswords(newPassword: string, passwordHash: string): Observable <any> {
        return from(bcrypt.compare(newPassword, passwordHash));
    }
}
