/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'title table' })
export class titleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
