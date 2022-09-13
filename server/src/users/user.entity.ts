import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CUSTOMER extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ unique: true, nullable: false })
  // image: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthday: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  job: string;

  @Column({ nullable: false })
  createData: string;

  @Column({ nullable: false })
  isDelete: number;
}
