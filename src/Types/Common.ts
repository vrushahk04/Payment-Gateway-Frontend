/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";

export type ApiResponse<T = unknown> = {
    status: number;
    message: string;
    data: T;
    error?: unknown;
};

export interface MessageStatus {
    status: number;
    message: string;
    error: Record<string, unknown>;
}
export interface CommonDataType {
    _id: string;
    isDeleted: boolean;
    createdBy: null;
    updatedBy: null;
    createdAt: string;
    updatedAt: string;
    isActive?: boolean;
}
export type Primitive = string | number;
export interface FieldOptions<T> {
    required?: boolean;
    extraRules?: (schema: T) => T;
    minItems?: number;
}
export type FieldSchemaArgs<K extends keyof FieldTypeMap> = [type: K, options?: FieldOptions<FieldTypeMap[K]>] | [type: K, label: string, options?: FieldOptions<FieldTypeMap[K]>];


export type FieldTypeMap = {
    string: Yup.StringSchema<string | null | undefined>;
    number: Yup.NumberSchema<number | null | undefined>;
    boolean: Yup.BooleanSchema<boolean | null | undefined>;
    array: Yup.ArraySchema<any[], Yup.AnyObject>;
};
export type MutationResponse<T = unknown> = ApiResponse<T>;

export type Params = Record<
    string,
    string | number | boolean | null | undefined
>;


export interface PageState {
    page: number;
    limit: number;
    totalPages: number;
}
export interface PageStatus {
    totalData: number;
    state: PageState;
}

export interface MessageStatus {
    status: number;
    message: string;
    error: Record<string, unknown>;
}


export interface PhoneNumberType {
    countryCode?: string;
    number?: string;
}