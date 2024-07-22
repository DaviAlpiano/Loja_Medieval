const httpErrorMap: { [key: string]: number } = {
  anyrequired: 400,
  numbermin: 400,
};
  
const joiStatusHTTP = (status: string) => httpErrorMap[status.split('.').join('')] || 400;
  
export default joiStatusHTTP;