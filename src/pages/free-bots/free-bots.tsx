import React from 'react';
import './free-bots.scss';

type TFreeBotsProps = {
    handleTabChange: (activeNumber: number) => void;
};

const bots = [
    {
        name: 'Nova Digit Scout',
        description: 'A balanced digits strategy with a conservative recovery profile.',
        market: 'Digits',
        risk: 'Low risk',
        accent: '#24bca7',
        icon: 'N',
    },
    {
        name: 'Velocity Rise/Fall',
        description: 'A momentum template for short Rise/Fall sessions and quick testing.',
        market: 'Rise / Fall',
        risk: 'Medium risk',
        accent: '#3978f6',
        icon: 'V',
    },
    {
        name: 'Atlas Even/Odd',
        description: 'A simple Even/Odd starter with clear stake and stop-loss controls.',
        market: 'Even / Odd',
        risk: 'Low risk',
        accent: '#8257e6',
        icon: 'A',
    },
    {
        name: 'Pulse Over/Under',
        description: 'A faster experimental template for Over/Under market exploration.',
        market: 'Over / Under',
        risk: 'High risk',
        accent: '#ec4f91',
        icon: 'P',
    },
    {
        name: 'Orion Match/Differ',
        description: 'A compact Match/Differ bot designed for demo-account practice.',
        market: 'Match / Differ',
        risk: 'Medium risk',
        accent: '#e6a51b',
        icon: 'O',
    },
    {
        name: 'Zenith Accumulator',
        description: 'A measured accumulator template with a visible profit target.',
        market: 'Accumulators',
        risk: 'Medium risk',
        accent: '#22a9c7',
        icon: 'Z',
    },
];

const FreeBots = ({ handleTabChange }: TFreeBotsProps) => {
    return (
        <section className='free-bots' aria-labelledby='free-bots-title'>
            <header className='free-bots__hero'>
                <div>
                    <span className='free-bots__eyebrow'>Strategy library</span>
                    <h1 id='free-bots-title'>Free bots, ready to explore</h1>
                    <p>Pick a starter strategy, open it in Bot Builder, and adjust every rule before running it.</p>
                </div>
                <div className='free-bots__hero-badge' aria-label='Six free bot templates'>
                    <strong>6</strong>
                    <span>Free templates</span>
                </div>
            </header>

            <div className='free-bots__notice'>
                <span aria-hidden='true'>ⓘ</span>
                Templates are for learning and testing. Always review the logic and practise on a demo account first.
            </div>

            <div className='free-bots__grid'>
                {bots.map(bot => (
                    <article className='free-bots__card' key={bot.name} style={{ '--bot-accent': bot.accent } as React.CSSProperties}>
                        <div className='free-bots__card-top'>
                            <span className='free-bots__bot-icon'>{bot.icon}</span>
                            <span className='free-bots__free-pill'>FREE</span>
                        </div>
                        <h2>{bot.name}</h2>
                        <p>{bot.description}</p>
                        <div className='free-bots__tags'>
                            <span>{bot.market}</span>
                            <span>{bot.risk}</span>
                        </div>
                        <button type='button' onClick={() => handleTabChange(1)}>
                            Open in Bot Builder <span aria-hidden='true'>→</span>
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default FreeBots;
