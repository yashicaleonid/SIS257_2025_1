import { Entity, Column, PrimaryGeneratedColumn } from '@nestjs/typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15 })
  ci: string;

  @Column('varchar', { length: 100 })
  nombres: string;

  @Column('varchar', { length: 100 })
  primer_apellido: string;

  @Column('varchar', { length: 100 })
  segundo_apellido: string;

  @Column('date')
  fecha_nacimiento: Date;
}