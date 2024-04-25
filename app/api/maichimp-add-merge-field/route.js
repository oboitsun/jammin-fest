export async function GET(req) {
  //   const subscriber_hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: process.env.NEXT_APP_MAILCHIMP_API_KEY,
    server: process.env.NEXT_APP_MAILCHIMP_SERVER_PREFIX,
  });

  const run = async () => {
    try {
      const response = await client.lists.getListMergeFields("ebc48ddb05");
      console.log(response);
    } catch (error) {
      console.error("Error occurred:", error.text);
    }
  };

  await run();

  return Response.json({ message: "hey" });
}
