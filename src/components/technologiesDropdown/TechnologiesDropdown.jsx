import Image from 'next/image';

import windows from '../../../public/images/windows.svg';
import arrowAngle from '../../../public/images/arrow-45.svg';
import ubuntu from '../../../public/images/ubuntu.svg';
import logoDark from '../../../public/images/logo-dark.svg';
import logo from '../../../public/images/logo.svg';
import { useState } from 'react';

function TechnologiesDropdown() {
	const [openDopdown, setOpenDopdown] = useState(true);
	return (
		<div className='technologies__dropdown'>
			<div
				onClick={() => setOpenDopdown(!openDopdown)}
				className={`dropdown__btn ${openDopdown && 'active-dropdown-btn'}`}>
				<svg
					width='18'
					height='15'
					viewBox='0 0 18 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M9.6574 0.318297C9.6268 0.239697 9.5583 0.182027 9.4757 0.165167C9.393 0.148317 9.3075 0.174567 9.2485 0.234887L4.81436 4.77091C4.73192 4.85525 4.72018 4.98593 4.78626 5.08361C4.85235 5.18129 4.97803 5.21901 5.08697 5.17385L8.90239 3.59262L12.8926 9.97516C12.9606 10.0839 13.1 10.123 13.2146 10.0655C13.3291 10.008 13.3811 9.87286 13.3345 9.75346L9.6574 0.318297ZM7.23968 6.49213C7.3038 6.38169 7.27369 6.24062 7.17006 6.16599C7.06644 6.09135 6.92309 6.1075 6.83866 6.20331L0.812007 13.0425C0.754157 13.1081 0.735137 13.1994 0.761937 13.2827C0.788737 13.366 0.857397 13.429 0.942677 13.4486L6.96933 14.8338C7.08396 14.8602 7.20134 14.8025 7.25051 14.6956C7.29968 14.5888 7.26713 14.4621 7.17256 14.3922L4.01038 12.0543L7.23968 6.49213ZM15.2431 8.11806C15.204 8.00306 15.0874 7.93336 14.9675 7.95316C14.8477 7.97306 14.7598 8.07666 14.7598 8.19816V12.0954L7.40437 12.2394C7.27597 12.2419 7.17068 12.3419 7.16156 12.47C7.15245 12.5981 7.24252 12.712 7.36927 12.7327L16.9617 14.2968C17.0478 14.3109 17.135 14.2787 17.1913 14.2121C17.2476 14.1455 17.2649 14.0543 17.2367 13.9717L15.2431 8.11806Z'
						fill='#000'
						stroke='white'
						stroke-width='0.2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<span>Operating Systems</span>
				<svg
					width='14'
					height='8'
					viewBox='0 0 14 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
						stroke='#9394A1'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
			<div className={`dropdown__body ${openDopdown && 'open-dropdown'}`}>
				<div className='dropdown__body_inner'>
					<div className='dropdown__item'>
						<span className='dropdown__item_logo'>
							<Image src={windows} alt='windows' />
						</span>
						<div className='dropdown__item_content'>
							<span>Windows VPS</span>
							<span>Starting at $47/mo</span>
						</div>
						<span className='dropdown__item_arrow'>
							<Image src={arrowAngle} alt='arrow' />
						</span>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item_logo'>
							<Image src={ubuntu} alt='ubuntu logo' />
						</span>
						<div className='dropdown__item_content'>
							<span>Ubuntu 22.04 Linux VPS</span>
							<span>Starting at $47/mo</span>
						</div>
						<span className='dropdown__item_arrow'>
							<Image src={arrowAngle} alt='arrow' />
						</span>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item_logo'>
							<Image src={logoDark} alt='quant logo' />
						</span>
						<div className='dropdown__item_content'>
							<span>Dedicated Server</span>
							<span>Starting under $100/mo</span>
						</div>
						<span className='dropdown__item_arrow'>
							<Image src={arrowAngle} alt='arrow' />
						</span>
					</div>
					<div className='dropdown__item'>
						<span className='dropdown__item_add'>
							<span>+</span>
						</span>
						<div className='dropdown__item_content'>
							<span>Custom needs? Contact us.</span>
						</div>
						<span className='dropdown__item_arrow'>
							<Image src={arrowAngle} alt='arrow' />
						</span>
					</div>
				</div>
				<div className='dropdown__footer'>
					<span>Powered by</span>
					<span>
						<Image src={logo} alt='quantum logo' />
					</span>
					<span>QuantVPS.com</span>
				</div>
			</div>
		</div>
	);
}

export default TechnologiesDropdown;
