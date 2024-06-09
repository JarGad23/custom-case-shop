"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

type Props = {
  id: string;
  newStatus: OrderStatus;
};

export const changeOrderStatus = async ({ id, newStatus }: Props) => {
  await db.order.update({
    where: { id },
    data: { status: newStatus },
  });
};
