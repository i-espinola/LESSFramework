import { stringNumbers } from '@utils';

export interface FormatPhoneProps { 
	number: string,
	type: 'business' | 'mobile' | 'phone' | 'ddd-mobile' | 'ddd-phone'
}

const useFormatPhone = ( props: FormatPhoneProps ) => {
  const { number, type } = props;
  const input = stringNumbers(number);
	let output = '';

	switch (type) {
    case 'business':
      output = `
			${input.slice(0, 4)} 
			${input.slice(4, 8)} 
			${input.slice(8, input.length)}`;
      break;
    case 'ddd-phone':
      output = `
			${input.slice(0, 2)} 
			${input.slice(2, 6)} 
			${input.slice(6, input.length)}`;
      break;
    case 'phone':
      output = `
			${input.slice(0, 4)} 
			${input.slice(4, input.length)}`;
      break;
    case 'mobile':
      output = `
			${input.slice(0, 5)} 
			${input.slice(5, input.length)}`;
      break;
    case 'ddd-mobile':
      output = `
			${input.slice(0, 2)} 
			${input.slice(2, 7)} 
			${input.slice(7, input.length)}`;
      break;
    default:
      console.error('Prop Type invalid');
      break;
  }

	return output;
}

export default useFormatPhone;
export { useFormatPhone };
