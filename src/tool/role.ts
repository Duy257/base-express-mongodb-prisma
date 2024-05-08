import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const roles = [
  { type: "admin", name: "Quản trị viên" },
  { type: "sale", name: "Nhân viên bán hàng" },
  // {type: 'sale', description: 'Nhân viên bán hàng'},
];

const policies = [
  { code: "product:read", description: "xem sản phẩm" },
  { code: "product:create", description: "tạo sản phẩm" },
  { code: "product:update", description: "sửa sản phẩm" },
  { code: "product:delete", description: "xoá sản phẩm" },
  { code: "product:update-price", description: "sửa giá sản phẩm" },

  { code: "category:read", description: "xem danh mục" },
  { code: "category:create", description: "tạo danh mục" },
  { code: "category:update", description: "sửa danh mục" },
];

async function generateRole() {
  await prisma.role_permission.deleteMany();
  await prisma.policy_permission.deleteMany();

  await prisma.role_permission.createMany({ data: roles });
  await prisma.policy_permission.createMany({ data: policies });
}

export { generateRole };
