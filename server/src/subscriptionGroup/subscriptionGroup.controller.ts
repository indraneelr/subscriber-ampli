import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubscriptionGroupService } from "./subscriptionGroup.service";
import { SubscriptionGroupControllerBase } from "./base/subscriptionGroup.controller.base";

@swagger.ApiTags("subscription-groups")
@common.Controller("subscription-groups")
export class SubscriptionGroupController extends SubscriptionGroupControllerBase {
  constructor(
    protected readonly service: SubscriptionGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
