import { Baby } from "src/scopes/babies/entity/babies.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'NAPS'})
export class Naps {
    @PrimaryGeneratedColumn('uuid', { name: 'ID'})
    id: string;

    @ManyToOne(() => Baby, baby => baby.naps, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'BABY_ID'})
    baby: Baby;

    @Column({ name: 'STARTED_AT'})
    startedAt: Date;

    @Column({ name: 'ENDED_AT'})
    endedAt: Date;

    @CreateDateColumn({ name: 'CREATED_AT'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT'})
    updatedAt: Date;
    
}