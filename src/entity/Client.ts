import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    numeroNational: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    rue: string;

    @Column()
    numeroRue: string;

    @Column()
    codePostal: string;

    @Column()
    commune: string;
}
