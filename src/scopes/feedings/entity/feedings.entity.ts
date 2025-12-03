import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Baby } from "../../babies/entity/babies.entity";
import { FeedingsTypeEnum } from "../enum/feedings.enum";

@Entity({ name: 'FEEDINGS' })
export class Feedings {
    @PrimaryGeneratedColumn('uuid', { name: 'ID' })
    id: string;

    @ManyToOne(() => Baby, babies => babies.feedings, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'BABY_ID', referencedColumnName: 'id' })
    baby: Baby;

    @Column({ name: 'TYPE' })
    type: FeedingsTypeEnum;

    @Column({ name: 'VOLUME', nullable: true })
    volume?: number;

    @Column({ name: 'STARTED_AT', type: 'timestamp' })
    startedAt: Date;

    @Column({ name: 'ENDED_AT', type: 'timestamp' })
    endedAt: Date;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: string;
}