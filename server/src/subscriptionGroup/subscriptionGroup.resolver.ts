import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SubscriptionGroupResolverBase } from "./base/subscriptionGroup.resolver.base";
import { SubscriptionGroup } from "./base/SubscriptionGroup";
import { SubscriptionGroupService } from "./subscriptionGroup.service";

@graphql.Resolver(() => SubscriptionGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SubscriptionGroupResolver extends SubscriptionGroupResolverBase {
  constructor(
    protected readonly service: SubscriptionGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
