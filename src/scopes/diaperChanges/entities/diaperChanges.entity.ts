import { Baby } from "src/scopes/babies/entity/babies.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DiaperTypesEnum } from "../enum/diaperTypes.enum";

@Entity({ name: 'DIAPER'})
export class DiaperChanges {
    @PrimaryGeneratedColumn('uuid', { name: 'ID'})
    id: string;

    @ManyToOne(() => Baby, baby => baby.diaper, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'BABY_ID', referencedColumnName: 'id'})
    baby: Baby;

    @Column({ name: 'TYPE'})
    type: DiaperTypesEnum;

    @Column({ name: 'DETAILS', nullable: true })
    details?: string;

    @CreateDateColumn({ name: 'CREATED_AT'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;
}