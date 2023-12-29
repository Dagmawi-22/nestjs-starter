import { HttpCode, Injectable, Res } from "@nestjs/common";
import { CreatePayoutDto } from "./dto/create-payout.dto";
import { UpdatePayoutDto } from "./dto/update-payout.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Payout } from "@prisma/client";

@Injectable()
export class PayoutsService {
  constructor(private prisma: PrismaService) {}

  @HttpCode(200)
  create(createPayoutDto: CreatePayoutDto) {
    return "This action adds a new payout";
  }

  async findAll(): Promise<Array<Payout> | null> {
    const result = await this.prisma.payout.findMany({
      orderBy: {
        num: "asc",
      },
    });

    return result.length ? result : [];
  }

   @HttpCode(200)
  findOne(id: number) {
    return `This action returns a #${id} payout`;
  }

  async getLatestId(): Promise<number | null> {
    const latestIdResult = await this.prisma.payout.findFirst({
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
      },
    });

    return latestIdResult?.id || null;
  }

  @HttpCode(200)
  async update(updatePayoutDto: UpdatePayoutDto) {
    interface Pay {
      num: number;
      payout: object[];
    }
     
    //  if(!updatePayoutDto?.payoutInfo?.length){
    //   return "payoutInfo must be an array!";
    //  }
      const payoutUpdateData = updatePayoutDto.payoutInfo.map(
        (element: Pay) => ({
          where: { num: Number(element?.num) },
          data: { payout: element?.payout },
        })
      );

      await Promise.all(
        payoutUpdateData.map(async (updateData) => {
          try {
            return await this.prisma.payout.updateMany(updateData);
          } catch (updateError) {
            console.error("Error updating payout:", updateError);
            return updateError;
          }
        })
      );

      return this.findAll();
  }

   @HttpCode(200)
  remove() {
    return this.prisma.payout.deleteMany({});
  }
}
