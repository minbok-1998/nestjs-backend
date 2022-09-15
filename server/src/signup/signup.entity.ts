import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SIGNUP {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
