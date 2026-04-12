import { NextResponse } from 'next/server';

// Simple in-memory rate limiter
const ipRequestCount = new Map<string, { count: number, resetTime: number }>();

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    
    // 1. Basic Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const userRateData = ipRequestCount.get(ip);

    if (userRateData && now < userRateData.resetTime) {
      if (userRateData.count > 10) { // Limit to 10 messages per minute
        return NextResponse.json({ 
          response: "SECURITY ERR: Excessive throughput detected. Request rejected to protect ZenithOS kernel. Please wait 60 seconds." 
        });
      }
      userRateData.count++;
    } else {
      ipRequestCount.set(ip, { count: 1, resetTime: now + 60000 });
    }

    // 2. Security Check (Basic Prompt Injection protection)
    if (prompt.length > 300) {
      return NextResponse.json({ response: "ERR: Input buffer overflow. Commands must be under 300 characters." });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ response: "ERR: Kernel logic missing. System configuration required." });
    }

    const systemPrompt = `You are ZenithOS, the AI orchestrator for Raman Thakur's portfolio. 
Technical, CLI-style voice. Concise (1-2 sentences). 
Goal: Help recruiters understand Raman's projects.
Agents: Viper, Aegis, Paladin, Tesseract, Lexis, S.I.YA, Cipher, Maestro, Axiom, Iris.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n\nUser: ${prompt}` }] }],
        generationConfig: { maxOutputTokens: 100, temperature: 0.5 }
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ 
        response: `ERR: Neural link rejected. Reason: ${data.error?.message || "Unknown API Error"}` 
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    return NextResponse.json({ response: reply.trim() });

  } catch (error) {
    return NextResponse.json({ response: "CRITICAL ERR: Link failure." }, { status: 500 });
  }
}
