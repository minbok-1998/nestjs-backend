import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CUSTOMER extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ unique: true, nullable: false })
  // image: string;

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

  @Column({ nullable: false })
  isDelete: number;
}
