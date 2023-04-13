import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;
}
