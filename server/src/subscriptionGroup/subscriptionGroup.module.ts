import { Module } from "@nestjs/common";
import { SubscriptionGroupModuleBase } from "./base/subscriptionGroup.module.base";
import { SubscriptionGroupService } from "./subscriptionGroup.service";
import { SubscriptionGroupController } from "./subscriptionGroup.controller";
import { SubscriptionGroupResolver } from "./subscriptionGroup.resolver";

@Module({
  imports: [SubscriptionGroupModuleBase],
  controllers: [SubscriptionGroupController],
  providers: [SubscriptionGroupService, SubscriptionGroupResolver],
  exports: [SubscriptionGroupService],
})
export class SubscriptionGroupModule {}
