import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {

    constructor(id: number, email: string, passwordHash: string, displayName: string, registeredAt: Date) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.displayName = displayName;
        this.registeredAt = registeredAt;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    passwordHash: string;

    @Column('text')
    displayName: string;

    @Column('date')
    registeredAt: Date;
}
