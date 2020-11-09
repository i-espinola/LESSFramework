
const stringNumbers = ( str: string | undefined ) => ( str ? str.replace( /[^0-9.]/g, '' ) : '');

export default stringNumbers;
export { stringNumbers };
