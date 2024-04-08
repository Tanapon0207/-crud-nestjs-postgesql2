import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    firstname: string;

    @Column({default: ''})
    lastname: string;

    @Column({default: ''})
    email: string;

    @Column({default: ''})
    phone: string;

    @Column({default: ''})
    username: string;

    @Column({default: ''})
    password: string;

    @Column({default: ''})
    role: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    timecreated: Date;


}
