export async function GET(req) {
  //   const subscriber_hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: process.env.NEXT_APP_MAILCHIMP_API_KEY,
    server: process.env.NEXT_APP_MAILCHIMP_SERVER_PREFIX,
  });

  const run = async () => {
    try {
      const response = await client.lists.createList({
        name: "Juicy Fest '25",
        permission_reminder: "permission_reminder",
        email_type_option: true,
        contact: {
          company: "Juicy Fest",
          address1: "address1",
          city: "city",
          country: "New Zealand",
          state: "TBA",
          zip: "TBA",
        },
        campaign_defaults: {
          from_name: "JUICY FEST",
          from_email: "contact@juicyfest.co",
          subject: "Subscription",
          language: "en",
        },
      });
      console.log(response?.data);
    } catch (error) {
      console.error("Error occurred:", error.text);
    }
  };

  await run();

  return Response.json({ message: "hey" });
}
