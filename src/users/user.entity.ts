import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class CUSTOMER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  image: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @Column()
  job: string;

  @Column()
  createData: string;

  @Column()
  isDeleted: number;
}
