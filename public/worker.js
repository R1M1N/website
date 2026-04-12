import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

// Standard Xenova config for browser workers
env.allowLocalModels = false;

class PipelineSingleton {
    static task = 'text-generation';
    static model = 'Xenova/Qwen1.5-0.5B-Chat';
    static instance = null;

    static async getInstance(progress_callback) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { 
                progress_callback 
            });
        }
        return this.instance;
    }
}

self.onmessage = async (event) => {
    const { prompt } = event.data;

    try {
        const generator = await PipelineSingleton.getInstance((x) => {
            self.postMessage(x);
        });

        // Simple prompt template for Qwen
        const fullPrompt = `<|im_start|>system\nYou are ZenithOS, the AI orchestrator for Raman Thakur's portfolio. You are concise and technical. Answer in 1-2 sentences. No markdown.<|im_end|>\n<|im_start|>user\n${prompt}<|im_end|>\n<|im_start|>assistant\n`;

        const output = await generator(fullPrompt, {
            max_new_tokens: 128,
            temperature: 0.7,
            do_sample: true,
            stop_sequence: ['<|im_end|>'],
        });

        // Clean up the output to only show the response
        let response = output[0].generated_text;
        response = response.split('<|im_start|>assistant\n').pop().replace('<|im_end|>', '').trim();

        self.postMessage({
            status: 'complete',
            response: response
        });
    } catch (error) {
        self.postMessage({ status: 'error', error: error.message });
    }
};
