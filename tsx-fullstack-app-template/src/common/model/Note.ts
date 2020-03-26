import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { Nullable } from '../Types';

@Entity()
export default class Note{
    @PrimaryGeneratedColumn()
    id : Nullable<number>;

    @Column("text")
    text : string;

    constructor(text : string){
        this.id = null;
        this.text = text;
    }
}