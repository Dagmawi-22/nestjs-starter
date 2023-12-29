import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayoutsService } from './payouts.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';

@Controller('payouts')
export class PayoutsController {
  constructor(private readonly payoutsService: PayoutsService) {}

  @Post()
  create(@Body() createPayoutDto: CreatePayoutDto) {
  return this.payoutsService.create(createPayoutDto);
  }

  @Get()
  findAll() {
    return this.payoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payoutsService.findOne(+id);
  }

  @Patch()
 async update(@Body() updatePayoutDto: UpdatePayoutDto) {
    return await this.payoutsService.update(updatePayoutDto);
  }

  @Delete()
  remove() {
    return this.payoutsService.remove();
  }
}
