const { AzureOpenAI } = require("openai");

const dotenv = require("dotenv");
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const apiKey = process.env["AZURE_OPENAI_API_KEY"];
const apiVersion = "2024-05-13";
const deployment = process.env.AZURE_OPENAI_MODEL; 

const prompt = ["When was Microsoft founded?"];

async function main() {
  console.log("== Get completions Sample ==");

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });  

  const result = await client.completions.create({ prompt, model: deployment});

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error("Error occurred:", err);
});

module.exports = { main };
