import { User } from "src/scopes/users/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'AUTH'})
export class Auth {
    @PrimaryGeneratedColumn('uuid', { name: 'ID' })
    id: string;

    @Column( { name: 'EMAIL', unique: true})
    email: string;

    @Column( { name: 'PASSWORD', nullable: true})
    password: string;

    @CreateDateColumn( { name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;
}

export default Auth;