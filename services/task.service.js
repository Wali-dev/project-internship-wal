const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTask = async (data) => {
  return prisma.task.create({
    data,
  });
};

exports.getTaskById = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

exports.updateTask = async (id, data) => {
  return prisma.task.update({
    where: {
      id,
    },
    data,
  });
};
