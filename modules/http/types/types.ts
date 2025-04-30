import { ValueOf } from "@/common/types/value-of.type";
import { HttpMethod as HttpMethodEnum } from "../enums/http-method.enum";

type HttpMethod = ValueOf<typeof HttpMethodEnum>;

export { HttpMethod };
