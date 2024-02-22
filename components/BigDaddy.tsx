'use client'
import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default function BigDaddy() {
    const [reqText, setReqText] = useState<string>('');
    const [resText, setResText] = useState<string>('');
    const [waiting, setWaiting] = useState<boolean>(false);

    const createCompletion = async () => {
        setWaiting(true);
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "INCLUDE FULL CSS, NOTHING LEFT TO THE IMAGINATION. Given CSS/SCSS, refactor the code to improve readability by ensuring consistent formatting and removing redundancy. Incorporate best practices for maintainability, such as using variables for colors, fonts, and other reusable values. Ensure that the structure facilitates easy updates and scalability. Always include everything in the response, never comment out or omit any styles.",
                },
                { role: 'user', content: reqText }
            ],
            model: 'gpt-4-turbo-preview',
            temperature: 0
        });

        console.log(chatCompletion.choices[0].message.content);
        setResText(chatCompletion.choices[0].message.content!);
        setWaiting(false);
    }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-5">
            <div className="flex flex-col justify-start items-start">
                <textarea onChange={(e) => setReqText(e.target.value)} className="w-96 h-96 bg-white text-black rounded-md p-3" />
                <p className="pt-2">Length: {reqText.length}</p>
            </div>
            <div className="flex flex-col justify-start items-start">
                <textarea value={resText} readOnly className="w-96 h-96 bg-white text-black rounded-md p-3" />
                <p className="pt-2">Length: {resText.length}</p>
            </div>
        </div>

        <button disabled={waiting} onClick={createCompletion} className=" px-6 py-2 disabled:bg-zinc-950 bg-white rounded-md active:scale-95 text-black">click</button>
    </div>
  );
}