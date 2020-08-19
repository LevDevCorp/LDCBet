import React from 'react';
import ReactDOM from 'react-dom';

const header = () => {
	return (
		<header>
			<div className="container mt-3">
				<div className="row">
					<div className="col-xl-9 col-lg-8 col-md-8">
						<div className="row">
							<div className="col-2">
								<img className="logo" alt="logo" src={'./logo.svg'} />
							</div>
							<div className="col-5 ">
								<div className="header_jackpot">
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1"><div className="header_jackpot_dot"></div></div>
									<div>
										<div className="header_jackpot_mini ml-1">
											<div className="m-1 header_jackpot_secondary"><p>8</p></div>
											<div className="m-1 header_jackpot_secondary"><p>8</p></div>									
										</div>

									</div>
								</div>
								<p className="ml-4 mr-4 header_jackpot_heading" >First Project</p>
							</div>
							<div className="col-5 ">
								<div className="header_jackpot">
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1 header_jackpot_main"><p>8</p></div>
									<div className="m-1"><div className="header_jackpot_dot"></div></div>
									<div>
										<div className="header_jackpot_mini ml-1">
											<div className="m-1 header_jackpot_secondary"><p>8</p></div>
											<div className="m-1 header_jackpot_secondary"><p>8</p></div>									
										</div>
									</div>
								</div>
								<p className="ml-4 mr-4 header_jackpot_heading" >First Project</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-4 mt-2 header_section2">
						<a className="header_buychips button mr-4" href="#"><img src="./images/buychips.svg" />Cashier</a>
						<a className="m-1" href="#"><img alt="sound" src="./images/sound.svg" /></a>
						<a className="m-1" href="#"><img alt="settings" src="./images/settings.svg" /></a>
						<a className="m-1" href="#"><img alt="cubes" src="./images/cubes.svg" /></a>
						<a className="m-1" href="#"><img alt="enlarge" src="./images/enlarge.svg" /></a>
						
					</div>
				</div>
			</div>
		</header>
	)
};

export { header };

