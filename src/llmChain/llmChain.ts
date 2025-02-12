import { PromptTemplate } from "@langchain/core/prompts";
import { OpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import { StringOutputParser } from "@langchain/core/output_parsers";

dotenv.config();

async function personalizedPitch(
  course: string,
  role: string,
  wordLimit: number
) {
  const promptTemplate = new PromptTemplate({
    template:
      "{course}에서 특정 {role}가 공부하는것의 중요성을 {wordLimit} 단어 이하로 설명하세요",
    inputVariables: ["course", "role", "wordLimit"],
  });

  const formattedPrompt = await promptTemplate.format({
    course,
    role,
    wordLimit,
  });

  const llm = new OpenAI({
    modelName: "gpt-3.5-turbo-instruct",
  });

  const outputParser = new StringOutputParser();
}
