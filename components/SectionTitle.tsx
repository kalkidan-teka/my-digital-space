export default function SectionTitle({children}: { children: React.ReactNode}) {
    return (
        <h2 className="relative mb-2 font-display italic text-olive before:absolute before:-left-8.5 before:top-1 before:size-4 before:rounded-full before:border-2 before:border-olive before:bg-paper">{children}</h2>
    );
}