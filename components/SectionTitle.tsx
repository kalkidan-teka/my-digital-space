export default function SectionTitle({children}: { children: React.ReactNode}) {
    return (
        <h2 className="mb-2 font-display italic text-olive">{children}</h2>
    );
}