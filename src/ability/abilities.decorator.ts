import { SetMetadata } from "@nestjs/common";

import { Action, AppSubjects } from "./ability.factory";

export const CHECK_ABILITY = 'check_ability';

export interface RequiredRule {
    action: Action;
    AppSubjects: AppSubjects;
}

export const checkAbilites = (...requirements: RequiredRule[]) => SetMetadata(CHECK_ABILITY, requirements)
