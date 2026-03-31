require("dotenv").config();

import express from "express";
import cors from "cors";


const { GoogleGenAI } = require("@google/genai");

import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { basePrompt as reactBasePrompt } from "./defaults/react";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Gemini setup
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


// ================= TEMPLATE ROUTE =================
app.post("/template", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Return either 'node' or 'react'. Only one word.\n" + prompt,
    });

    const answer = response.text.trim().toLowerCase();

    if (answer === "react") {
      res.json({
        prompts: [
          BASE_PROMPT,
          `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
        ],
        uiPrompts: [reactBasePrompt],
      });
      return;
    }

    if (answer === "node") {
      res.json({
        prompts: [
          `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
        ],
        uiPrompts: [nodeBasePrompt],
      });
      return;
    }

    res.status(403).json({ message: "Invalid response from AI" });
  } catch (error) {
    console.error("Template Error:", error);
    res.status(500).json({ message: "Error in template route" });
  }
});


// ================= CHAT ROUTE =================
app.post("/chat", async (req, res) => {
  try {
    const messages = req.body.messages;

    const userMessages = messages.map((msg: any) => msg.content).join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: getSystemPrompt() + "\n" + userMessages,
    });

    res.json({
      response: response.text,
    });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ message: "Error in chat route" });
  }
});


// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});