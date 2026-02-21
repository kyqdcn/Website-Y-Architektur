import { GoogleGenAI } from "@google/genai";

// Helper to clean base64 string
const cleanBase64 = (base64: string) => {
  return base64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
};

const getMimeType = (base64: string) => {
  const match = base64.match(/^data:image\/(png|jpeg|jpg|webp);base64,/);
  return match ? `image/${match[1]}` : 'image/jpeg';
}

export const generateProjectDescription = async (base64Image: string, title: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key is missing. Returning placeholder text.");
      return "KI-Beschreibung nicht verfügbar (Fehlender API-Schlüssel).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using flash-image model as per guidelines for image tasks
    const modelId = 'gemini-2.5-flash-image'; 
    
    const imagePart = {
      inlineData: {
        mimeType: getMimeType(base64Image),
        data: cleanBase64(base64Image)
      }
    };

    const prompt = `Du bist ein anspruchsvoller Architekturkritiker. Betrachte dieses Bild. 
    Das Projekt trägt den Titel "${title}". 
    Schreibe eine kurze, elegante und professionelle Architekturbeschreibung (max. 2 Sätze) für eine Portfolio-Website auf Deutsch. 
    Konzentriere dich auf Materialien, Licht, Form und Atmosphäre. Vermeide blumige Sprache, halte es minimalistisch und modern.`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [imagePart, { text: prompt }]
      }
    });

    return response.text || "Beschreibung konnte nicht generiert werden.";

  } catch (error) {
    console.error("Error generating description:", error);
    return "Fehler bei der Generierung der Beschreibung. Bitte versuche es erneut.";
  }
};