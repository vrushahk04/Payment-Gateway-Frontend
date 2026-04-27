import { KEYS, URL_KEYS } from "../Constants";
import type {
    LoginPayload,
    LoginResponse,
} from "../Types";

import { Post } from "./Method";
import { useMutations } from "./ReactQuery";

export const Mutations = {
    // ************ AUTH ************
    useLogin: () =>
        useMutations<LoginPayload, LoginResponse>(
            [KEYS.AUTH.LOGIN],
            (input) => Post(URL_KEYS.AUTH.LOGIN, input, false)
        ),

};