import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "subTitle";

export const PostTitle = (record: TPost): string => {
  return record.subTitle?.toString() || String(record.id);
};
