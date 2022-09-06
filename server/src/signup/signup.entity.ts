import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class NEWSIGNUP {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  passwordCheck: string;
}
