import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column({ default: '', type: 'varchar', length: 50 })
    firstname: string;
    
    @Column({ default: '', type: 'varchar', length: 50 })
    lastname: string;
    
    @Column({ default: '', type: 'varchar', length: 50 })
    email: string;
    
    @Column({ default: '', type: 'varchar', length: 10 }) 
    phone: string;
    
    @Column({ default: '', type: 'varchar', length: 20 })
    username: string;
    
    @Column({ default: '', type: 'varchar', length: 20 })
    password: string;
    
    @Column({ default: 'user', type: 'enum', enum: ['user', 'admin'] })
    role: string;
    
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timecreated: Date;
    

}
