import { Baby } from "src/scopes/babies/entity/babies.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MoodTypeEnum } from "../enum/mood.enum";

@Entity({ name: 'MOOD' })
export class Mood {
    @PrimaryGeneratedColumn( 'uuid', { name: 'ID' })
    id: string;

    @ManyToOne(() => Baby, baby => baby.mood, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'BABY_ID', referencedColumnName: 'id' })
    baby: Baby;

    @Column({ name: 'MOOD' })
    moodType: MoodTypeEnum;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;
}