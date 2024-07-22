const httpErrorMap: { [key: string]: number } = {
  anyrequired: 400,
  numbermin: 422,
  stringmin: 422,
  stringbase: 422,
  numberbase: 422,
};
  
const joiStatusHTTP = (status: string): number => httpErrorMap[status.split('.').join('')] || 400;
  
export default joiStatusHTTP;