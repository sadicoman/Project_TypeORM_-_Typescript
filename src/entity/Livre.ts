import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Livre {
    @PrimaryColumn()
    isbn: string;

    @Column()
    titre: string;

    @Column()
    nomAuteurs: string;

    @Column("date")
    dateAchat: Date;
}
