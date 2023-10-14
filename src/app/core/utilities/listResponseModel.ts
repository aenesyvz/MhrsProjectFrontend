export interface ListResponseWithPaginationModel<T> {
    items: T[];
    index?: number;
    size?: number;
    count?: number;
    pages?: number;
    hasPrevious?: number;
    hasNext?: number;
}