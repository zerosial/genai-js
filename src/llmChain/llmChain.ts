import { PromptTemplate } from "@langchain/core/prompts";

const promptTemplate = new PromptTemplate({
  template:
    "{course}에서 특정 {role}가 공부하는것의 중요성을 {wordLimit} 단어 이하로 설명하세요",
  inputVariables: ["course", "role", "wordLimit"],
});

const formattedPrompt = await promptTemplate.format({
  course: "AI 생성",
  role: "JavaScript 개발자",
  wordLimit: "100",
});

console.log("Formatted Prompt: ", formattedPrompt);
