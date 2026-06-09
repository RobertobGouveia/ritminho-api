import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
import { Feedings } from "../../feedings/entity/feedings.entity";
import { Activities } from "src/scopes/activities/entities/activities.entity";
import { Naps } from "src/scopes/naps/entities/naps.entity";
import { DiaperChanges } from "src/scopes/diaperChanges/entities/diaperChanges.entity";
import { Mood } from "src/scopes/mood/entities/mood.entity";

@Entity({ name: 'BABIES' })
export class Baby {
    @PrimaryGeneratedColumn('uuid', { name: 'ID' })
    id: string;

    @ManyToOne(() => User, user => user.babies)
    @JoinColumn({ name: 'USER_ID', referencedColumnName: 'id' })
    user: User;

    @Column({ name: 'NAME' })
    name: string;

    @Column({ name: 'BIRTH_DATE' })
    birthDate: Date;

    @OneToMany(() => Feedings, feedings => feedings.baby, { onDelete: 'CASCADE', cascade: true })
    feedings: Feedings[];

    @Column({ name: 'GENDER', nullable: true })
    gender: string;

    @OneToMany(() => Activities, activities => activities.baby, { onDelete: 'CASCADE', cascade: true})
    activities: Activities[];

    @OneToMany(() => Naps, naps => naps.baby, { onDelete: 'CASCADE', cascade: true})
    naps: Naps[];

    @OneToMany(() => DiaperChanges, diaperChange => diaperChange.baby, { onDelete: 'CASCADE', cascade: true})
    diaper: DiaperChanges[];

    @OneToMany(() => Mood, mood => mood.baby, { onDelete: 'CASCADE', cascade: true})
    mood: Mood[];

    @Column({ name: 'CURRENT_WEIGHT', default: 0, type: 'decimal', precision: 10, scale: 2 })
    currentWeight: number;

    @Column({ name: 'CURRENT_LENGTH', default: 0, type: 'decimal', precision: 10, scale: 2 })
    currentLength: number;
    
    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT'})
    updatedAt: Date;
}