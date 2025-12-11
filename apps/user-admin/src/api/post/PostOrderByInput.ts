import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  subTitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
