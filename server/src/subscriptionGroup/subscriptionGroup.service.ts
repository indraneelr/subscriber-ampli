import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SubscriptionGroupServiceBase } from "./base/subscriptionGroup.service.base";

@Injectable()
export class SubscriptionGroupService extends SubscriptionGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
