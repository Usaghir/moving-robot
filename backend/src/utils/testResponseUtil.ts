export const sendJSONResponse = (res: any, status: number, data: object) => {
  res.status(status).json(data);
};
