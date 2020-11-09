


const stringAlphanumeric = ( str: string | undefined ) => ( str ? str.replace(/^[a-z0-9]+$/i, '' ) : '');

export default stringAlphanumeric;
export { stringAlphanumeric };
