/* eslint-disable import/no-extraneous-dependencies */
import { Form } from "multiparty";
import { NextApiRequest } from "next";

function asyncFormParse(
  req: NextApiRequest
): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

export default asyncFormParse;
