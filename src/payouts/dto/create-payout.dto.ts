
import { ApiProperty } from '@nestjs/swagger';

      
export class  CreatePayoutDto {


 @ApiProperty({
    description: 'payoutInfo',
    required: false,
      example: [
        {
        num: 2,
        payout: [
            {
                "num": 2,
                "odd": 15
            }
        ]
        }
      ]
  })
  payoutInfo?: object[];
}

