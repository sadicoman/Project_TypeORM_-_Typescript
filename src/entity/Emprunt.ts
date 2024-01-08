import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Client } from "./Client";
import { Livre } from "./Livre";

@Entity()
export class Emprunt {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    dateEmprunt: Date;

    @Column("date", { nullable: true })
    dateRetour: Date | null;

    @ManyToOne(() => Client)
    client: Client;

    @ManyToOne(() => Livre)
    livre: Livre;
}
