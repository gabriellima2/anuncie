import type { InferType } from "yup";
import type { IProduct } from "./IProduct";

import { adSchema } from "src/schemas/ad.schema";

export interface IAdForm extends InferType<typeof adSchema> {}

export interface IAdFormProductParams extends Omit<IProduct, "soldBy" | "id"> {}
