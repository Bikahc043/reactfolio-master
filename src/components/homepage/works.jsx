import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./capgemini.png"
								alt="capgemini"
								className="work-image"
							/>
							<div className="work-title">Capgemini</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./techfortune.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">techfortune technologies</div>
							<div className="work-subtitle">
								Software Engineer intern 
							</div>
							<div className="work-duration">2021</div>
						</div>
						<div className="work">
							<img
								src="./chegg.jpeg"
								alt="chegg"
								className="work-image"
							/>
							<div className="work-title">chegg</div>
							<div className="work-subtitle">
								Subject matter Expert
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
