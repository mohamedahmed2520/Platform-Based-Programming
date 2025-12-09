const prisma = require('../prisma/client');

const list = () => prisma.user.findMany({ orderBy: { id: 'asc' }});
const getById = id => prisma.user.findUnique({ where: { id: Number(id) }});
const updateUser = (id, data) => prisma.user.update({ where: { id: Number(id) }, data });
const deleteUser = id => prisma.user.delete({ where: { id: Number(id) }});

module.exports = { list, getById, updateUser, deleteUser };
