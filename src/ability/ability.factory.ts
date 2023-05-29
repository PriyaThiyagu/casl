import { 
  Ability, 
  AbilityBuilder, 
  AbilityClass, 
  ExtractSubjectType, 
  PureAbility 
} from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { User, Post } from '@prisma/client';
import { Subjects } from '@casl/prisma';
export enum Action{
    Manage='manage', //wildcard
    Create='create',
    Read='read',
    Update='update',
    Delete='delete'
}
export type AppSubjects = Subjects< {User:User,Post:Post}>|'all'
export type AppAbility = PureAbility<[Action,AppSubjects]>;
@Injectable()
export class AbilityFactory {
    defineAbility(user:User){
        const {can, cannot, build} = new AbilityBuilder(Ability as AbilityClass<AppAbility>);
            //define rules
          if(user.role==='Admin') {
            can(Action.Manage,'all')
          } else {
            can(Action.Create,'Post'),
            can(Action.Read,'Post'),
            cannot(Action.Delete,'all').because('Only admins can delete')
          }
          return build({
            detectSubjectType: (item) =>
                item.constructor as unknown as ExtractSubjectType<AppSubjects>,
        });
          
    }
}
