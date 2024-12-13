export default function Heading({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<h1
			className={`sub-heading font-medium font-NeueMontreal text-secondry ${className}`}>
			{title}
		</h1>
	);
}
// Update on 12/13/2024 18:08:13
