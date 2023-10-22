import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";
import { UserRole } from "./user.interface";


@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true})
    cpf: string;

    @Column({ nullable: true, type: 'date'})
    birth: Date;

    @Column({ unique: true})
    email: string;

    @Column({ nullable: true})
    escolaridade: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;
    
    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLowerCase();
    }
    
}