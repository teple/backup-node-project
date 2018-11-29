import {
  Table, 
  Column, 
  Model, 
  HasMany, 
  CreatedAt, 
  UpdatedAt, 
  AllowNull, 
  AutoIncrement, 
  Unique, 
  Comment, 
  Scopes, 
  PrimaryKey, 
  IsUUID,
  Default,
} from "sequelize-typescript";
import { DataTypeUUIDv4, UUIDV4 } from "sequelize";

// @Scopes({
//   movies: {
//     include: [
//       {
//         model: () => Person,
//         through: {attributes: []},
//       },
//     ],
//   },
// })

@Table
export class Person extends Model<Person> {

  @IsUUID(4)
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  birthday: Date;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;


  // @HasMany(() => Hobby)
  // hobbies: Hobby[];

}
