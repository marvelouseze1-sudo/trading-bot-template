type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({ width = 148, height = 36, fill = 'currentColor', className = '' }: TBrandLogoProps) => {
    return (
        <div
            className={`brand-logo ${className}`}
            style={{ width, minHeight: height, color: fill }}
            role='img'
            aria-label='TradePilot Bot'
        >
            <span className='brand-logo__mark' aria-hidden='true'>TP</span>
            <span className='brand-logo__copy'>
                <strong>TRADEPILOT</strong>
                <small>BOT PLATFORM</small>
            </span>
        </div>
    );
};
