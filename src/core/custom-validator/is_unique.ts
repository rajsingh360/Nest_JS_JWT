import { Injectable } from "@nestjs/common"
import { InjectEntityManager } from "@nestjs/typeorm"
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator"
import { EntityManager } from "typeorm"

export type IsUniqeInterface = {
    connectionName:string,
    tableName: string,
    column: string
}

@ValidatorConstraint({name: 'IsUniqueConstraint', async: true})
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectEntityManager('mysql-kuber') private readonly entityManager: EntityManager,
        @InjectEntityManager('mysql-kuber') private readonly entityManager2: EntityManager,
        ) {}
    async validate(
        value: any,
        args?: ValidationArguments
        ): Promise<boolean> {
            // catch options from decorator
            const {connectionName, tableName, column}: IsUniqeInterface = args.constraints[0]
           
            // database query check data is exists
            const dataExist = await this.entityManager.getRepository(tableName)
                .createQueryBuilder(tableName)
                .where({[column]: value})
                .getExists()
        
            return !dataExist
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        // return custom field message
        const field: string = validationArguments.property
        return `${field} is already exist`
    }
}


// decorator function
export function isUnique(options: IsUniqeInterface, validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'isUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options],
            validator: IsUniqueConstraint,
        })
    }
}