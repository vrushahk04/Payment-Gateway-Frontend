export type ApiResponse<T = unknown> = {
    status: number;
    message: string;
    data: T;
    error?: unknown;
};

export type MutationResponse<T = unknown> = ApiResponse<T>;

export type Params = Record<
    string,
    string | number | boolean | null | undefined
>;