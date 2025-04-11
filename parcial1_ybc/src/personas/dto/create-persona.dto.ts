import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePersonaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo CI no debe ser vacío' })
  @IsString({ message: 'El campo CI debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo CI no debe ser mayor a 15 caracteres' })
  readonly ci: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombres no debe ser mayor a 100 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo primer apellido no debe ser vacío' })
  @IsString({ message: 'El campo primer apellido debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo primer apellido no debe ser mayor a 100 caracteres' })
  readonly primer_apellido: string;

  @ApiProperty()
  @IsString({ message: 'El campo segundo apellido debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo segundo apellido no debe ser mayor a 100 caracteres' })
  readonly segundo_apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha de nacimiento no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha de nacimiento debe ser tipo fecha' })
  readonly fecha_nacimiento: Date;
}