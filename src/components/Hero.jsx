import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

const Hero = () => {
	// set state for video source based on window width on initial render and on window resize event
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760 ? smallHeroVideo : heroVideo
	);
	// function to switch video source on window resize event
	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	};
	useEffect(() => {
		// trigger effect to switch video source on window resize event
		window.addEventListener("resize", handleVideoSrcSet);
		//  clean up event listener
		return () => window.removeEventListener("resize", handleVideoSrcSet);
	}, []);
	// gsap animation to fade in hero text on initial render and after 1.5 seconds
	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 1,
			delay: 2,
		});
		gsap.to("#cta", {
			opacity: 1,
			y: -50,
			delay: 2,
		});
	}, []);
	return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 Pro
				</p>
				<div className="md:w-10/12 w-9/12">
					<video
						className="pointer-events-none"
						autoPlay
						muted
						playsInline={true}
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>
			<div
				id="cta"
				className="flex flex-col items-center opacity-0 translate-y-20"
			>
				<a href="#highlights" className="btn">
					Buy
				</a>
				<p className="font-normal text-xl">From $199/month or $999</p>
			</div>
		</section>
	);
};

export default Hero;
