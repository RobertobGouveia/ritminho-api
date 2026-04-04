import { GoogleGenAI } from "@google/genai";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class GeminiService {
    private genAi: GoogleGenAI = new GoogleGenAI({})

    constructor(){
        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            throw new InternalServerErrorException('Google API key is not configured');
        }
        this.genAi = new GoogleGenAI({ apiKey });
    }

    async generateText(data: any): Promise<string> {

        const prompt = `
            Você é um assistente especialista em rotina de bebês.

            Analise os dados abaixo e gere um relatório curto, claro e amigável para os pais.

            Dados:
            ${JSON.stringify(data)}

            Regras:
            - Seja direto e objetivo (máx. 6-8 linhas no total)
            - Use linguagem simples e acolhedora
            - Evite explicações longas ou técnicas
            - Foque apenas no que é mais relevante

            Formato da resposta:

            Resumo do dia:
            (Poucas palavras, visão geral)

            Padrões:
            (1-2 pontos principais)

            Sugestões:
            (1-2 sugestões práticas)

            Alertas:
            (Apenas se houver algo importante, senão escreva: "Nenhum alerta relevante")
            `;

        const response = await this.genAi.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: {
                text: prompt,
            }
        });
        return response.text;
    }
}