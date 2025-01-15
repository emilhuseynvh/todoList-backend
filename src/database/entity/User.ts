import { BeforeInsert, Column, CreateDateColumn, Entity,  OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Note } from "./Note";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    password: string

    @Column()
    age: number

    @UpdateDateColumn()
    updatedAt: Date

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Note, (note) => note.user)
    note: Note[]


    @BeforeInsert()
    async beforeInsert () {
        console.log('Before insert hook called');
        this.password = await bcrypt.hash(this.password, 10);
    }
}