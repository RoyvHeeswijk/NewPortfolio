const borderColor = 'hsl(220, 14%, 16%)';

export default function Footer() {
    return (
        <footer style={{ borderTop: `1px solid ${borderColor}` }}>
            <div className="max-w-[1200px] mx-auto px-8 py-6 text-center">
                <p className="text-xs" style={{ color: 'hsl(215, 12%, 35%)' }}>
                    @2026 Roy van Heeswijk
                </p>
            </div>
        </footer>
    );
}
