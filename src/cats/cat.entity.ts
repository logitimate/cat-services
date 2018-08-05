import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @Column('text')
    description: string;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    longHair: boolean;

    @Column({nullable: true})
    tail: boolean;

    @Column()
    sex: string;
}