import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column('text')
    content: string;

    @Column('date')
    date: Date;

    @Column('int')
    authorId: number;

    static decode(postJson: any): PostEntity {
        const post = Object.create(PostEntity.prototype);
        return Object.assign(post, postJson, {
            date: new Date(postJson.date),
        });
    }

    encode(): any {
        return Object.assign({}, this, {
            date: this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate(),
        });
    }
}
