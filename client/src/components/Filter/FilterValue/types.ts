export enum typeFilter {
    VALUE = 'value',
    CULUM = 'colum',
}

export enum orderSort {
    ASCENDING = "по возраст.",
    DESCENDING = "по убыв.",
}

export interface IProps {
    type: typeFilter
}
