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
export class IsExistsConstraint implements ValidatorConstraintInterface {
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
        
            return dataExist
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        // return custom field message
        const field: string = validationArguments.property
        return `${field} not exists in DB`
    }
}


// decorator function
export function isExists(options: IsUniqeInterface, validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'isExists',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options],
            validator: IsExistsConstraint,
        })
    }
}