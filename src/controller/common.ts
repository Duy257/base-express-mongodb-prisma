import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class commonCRUD {
  model: String = "";

  constructor(model: String) {
    this.model = model;
  }

  create = async (req: any, res: any) => {
    try {
      const data = req.body;
      const newData = await prisma[`${this.model}`].create({ data });
      return res.status(200).json(newData);
    } catch (error) {
      throw res.status(400).json(error);
    }
  };

  find = async (req: any, res: any) => {
    const query = req.query;
    try {
      const data = await prisma[`${this.model}`].findMany({ where: query });
      return res.status(200).json(data);
    } catch (e) {
      throw res.status(400).json(e);
    }
  };

  findOne = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const data = await prisma[`${this.model}`].findUnique({
        where: {
          id,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      throw res.status(400).json(error);
    }
  };

  update = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const data = req.body;

      const newData = await prisma[`${this.model}`].update({
        where: {
          id,
        },
        data,
      });
      return res.status(200).json(newData);
    } catch (error) {
      throw res.status(400).json(error);
    }
  };

  delete = async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const data = await prisma[`${this.model}`].delete({
        where: {
          id,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      throw res.status(400).json(error);
    }
  };
}

export default commonCRUD;
