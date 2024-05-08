import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class RoleController {
  editRoleUser = async (req: any, res: any) => {
    const id = req.params.id;
    const { role } = req.body;
    try {
      let user = await prisma.users.findUnique({ where: { id: id } });
      if (!user) {
        throw res.status(404).json("Không tìm thấy người dùng");
      } else {
        const rolePolicies = await prisma.role_policy.findMany({
          where: { role: user.role },
        });
        const listDelete = rolePolicies.filter((i) => !role.includes(i.policy));
        await prisma.role_policy.deleteMany({
          where: {
            role: user.role,
            policy: { in: listDelete.map((i) => i.policy) },
          },
        });
        const listPoliciesExist: Array<String> = rolePolicies.map(
          (i) => i.policy
        );
        const newPolicies = role.filter(
          (i: String) => !listPoliciesExist.includes(i)
        );
        const policies = await prisma.policy_permission.findMany({
          where: { id: { in: newPolicies } },
        });
        const data = policies.map((policy) => {
          return {
            role: user.role,
            policy: policy.id,
            code: policy.code,
          };
        });
        await prisma.role_policy.createMany({
          data,
        });
        return res.status(200).json({ success: true });
      }
    } catch (err) {
      throw res.status(400).json(err);
    }
  };
}

export default new RoleController();
