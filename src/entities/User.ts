import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    uuid: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    isAdm: boolean;

    @Column()
    createdOn: Date;

    @Column()
    updatedOn: Date;

}
