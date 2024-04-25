import * as crypto from "crypto";

export async function POST(req) {
  const { email, fname, lname, tag, country, location } = (await req?.json()) || {};

  const subscriber_hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: process.env.NEXT_APP_MAILCHIMP_API_KEY,
    server: process.env.NEXT_APP_MAILCHIMP_SERVER_PREFIX,
  });
  console.log(email, fname, lname, tag);
  const run = async () => {
    try {
      const response = await client.lists.setListMember("ebc48ddb05", subscriber_hash, {
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
          MMERGE5: country,
          MMERGE6: location,
        },
        tags: tag ? [tag] : [],
      });

      return { message: "TOP", status: 200 };
    } catch (error) {
      console.error("Error occurred:", error);
      return { message: error?.message, status: 500 };
    }
  };

  const data = await run();

  return Response.json(data);
}
