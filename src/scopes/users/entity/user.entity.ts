import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Baby } from "../../babies/entity/babies.entity";
import Auth from "src/scopes/auth/entities/auth.entity";

@Entity({ name: 'USERS'})
export class User {

    @PrimaryGeneratedColumn('uuid', { name: 'ID' })
    id: string;

    @Column({ name: 'NAME'})
    name: string;

    @OneToOne(() => Auth)
    @JoinColumn({ name: 'AUTH_ID', referencedColumnName: 'id' })
    auth: Auth;

    @OneToMany(() => Baby, baby => baby.user, { cascade: true, onDelete: 'CASCADE' })
    babies: Baby[];

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;
}