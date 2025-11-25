import { Baby } from "src/scopes/babies/entity/babies.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ActivitiesEnum } from "../enum/activities.enum";

@Entity({ name: 'ACTIVITIES' })
export class Activities {
    @PrimaryGeneratedColumn('uuid', { name: 'ID'})
    id: string;

    @ManyToOne(() => Baby, babies => babies.activities, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'BABY_ID'})
    baby: Baby;

    @Column({ name: 'TYPE'})
    type: ActivitiesEnum

    @Column({ name: 'DESCRIPTION', nullable: true})
    description?: string;

    @CreateDateColumn({ name: 'CREATED_AT'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT'})
    updatedAt: Date
}