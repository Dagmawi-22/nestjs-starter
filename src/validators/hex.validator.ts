
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isHexCode', async: false })
export class IsHexCode implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const hexCodeRegex = /^#([0-9A-Fa-f]{6})$/;
    return hexCodeRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid hex code';
  }
}
