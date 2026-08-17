import React, { FormEvent, useState } from 'react';
import './pegasus.scss';

const promptIdeas = [
    'Explain my bot logic',
    'Suggest a safer stake plan',
    'Help me choose a market',
];

const Pegasus = () => {
    const [message, setMessage] = useState('');
    const [lastPrompt, setLastPrompt] = useState('');

    const submitPrompt = (event: FormEvent) => {
        event.preventDefault();
        if (!message.trim()) return;
        setLastPrompt(message.trim());
        setMessage('');
    };

    return (
        <section className='pegasus' aria-labelledby='pegasus-title'>
            <div className='pegasus__shell'>
                <aside className='pegasus__intro'>
                    <span className='pegasus__mark'>P</span>
                    <span className='pegasus__status'><i /> Online beta</span>
                    <h1 id='pegasus-title'>Meet Pegasus</h1>
                    <p>Your strategy co-pilot for understanding blocks, planning risk controls, and preparing a bot for demo testing.</p>
                    <ul>
                        <li><span>01</span> Explain trading blocks in plain language</li>
                        <li><span>02</span> Review risk settings before a run</li>
                        <li><span>03</span> Turn an idea into a build checklist</li>
                    </ul>
                    <div className='pegasus__disclaimer'>Pegasus provides educational guidance, not financial advice or guaranteed results.</div>
                </aside>

                <div className='pegasus__chat'>
                    <div className='pegasus__chat-header'>
                        <div>
                            <strong>Pegasus AI</strong>
                            <span>Strategy assistant</span>
                        </div>
                        <span className='pegasus__beta'>BETA</span>
                    </div>

                    <div className='pegasus__conversation' aria-live='polite'>
                        <div className='pegasus__message pegasus__message--ai'>
                            <span className='pegasus__avatar'>P</span>
                            <div>
                                <strong>Hi, I’m Pegasus.</strong>
                                <p>Tell me what you want your bot to do, or choose a quick prompt below to get started.</p>
                            </div>
                        </div>
                        {lastPrompt && (
                            <>
                                <div className='pegasus__message pegasus__message--user'><p>{lastPrompt}</p></div>
                                <div className='pegasus__message pegasus__message--ai'>
                                    <span className='pegasus__avatar'>P</span>
                                    <div>
                                        <strong>Good starting point.</strong>
                                        <p>This preview is ready for an AI service connection. For now, use Bot Builder to review the market, stake, stop-loss, and restart conditions behind your strategy.</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className='pegasus__prompts'>
                        {promptIdeas.map(prompt => (
                            <button type='button' key={prompt} onClick={() => setMessage(prompt)}>{prompt}</button>
                        ))}
                    </div>
                    <form className='pegasus__composer' onSubmit={submitPrompt}>
                        <label htmlFor='pegasus-prompt' className='pegasus__sr-only'>Ask Pegasus a question</label>
                        <input
                            id='pegasus-prompt'
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            placeholder='Ask Pegasus about your strategy...'
                        />
                        <button type='submit' aria-label='Send message'>↑</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Pegasus;
