import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
		<TextMarquee baseVelocity="0.7">
			<h1
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white  whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
// Update on 08/23/2024 10:30:54
// Update on 11/04/2024 23:10:06
