import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  //   @Expose()
  //   user: User;
  @Expose()
  approved: boolean;

  // takes the original format entity look at its user's id property
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
