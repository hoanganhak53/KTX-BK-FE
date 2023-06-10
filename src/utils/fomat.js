import { genders, majors } from 'constanst/index';

export const formatCurrency = (number) => {
    const roundedNumber = Number(number).toFixed(0).toString();

    const parts = roundedNumber.split('.');
    const integerPart = parts[0];

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const formattedNumber = `${formattedInteger}VND`;

    return formattedNumber;
};

export const formatGender = (number) => {
    return genders[number - 1]?.label || 'NA';
};

export const formatMajor = (number) => {
    return majors[number - 1]?.label || 'NA';
};
