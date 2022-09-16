import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LOGIN {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
