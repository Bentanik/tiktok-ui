import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get(`users/search?q`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {}
};
