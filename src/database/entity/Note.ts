import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @UpdateDateColumn()
    updatedAt: Date
    
    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (user) => user.note)
    user: User
}