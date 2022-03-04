/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSubscriptionGroupGroupType } from "./EnumSubscriptionGroupGroupType";
import { Plan } from "../../plan/base/Plan";
import { EnumSubscriptionGroupVisibility } from "./EnumSubscriptionGroupVisibility";
@ObjectType()
class SubscriptionGroup {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionGroupGroupType,
    isArray: true,
  })
  @IsEnum(EnumSubscriptionGroupGroupType, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSubscriptionGroupGroupType], {
    nullable: true,
  })
  groupType?: Array<"Campaign" | "Standard">;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Plan],
  })
  @ValidateNested()
  @Type(() => Plan)
  @IsOptional()
  plans?: Array<Plan>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionGroupVisibility,
    isArray: true,
  })
  @IsEnum(EnumSubscriptionGroupVisibility, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSubscriptionGroupVisibility], {
    nullable: true,
  })
  visibility?: Array<"private" | "public">;
}
export { SubscriptionGroup };
