const ContentType = {
  JSON: "application/json",
  FORM_URLENCODED: "application/x-www-form-urlencoded",
  TEXT_PLAIN: "text/plain",
  FORM_DATA: "multipart/form-data",
} as const;

export { ContentType };
