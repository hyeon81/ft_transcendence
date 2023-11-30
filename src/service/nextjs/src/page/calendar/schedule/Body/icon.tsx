import React from 'react';

export const CalendarIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 25"
			fill="none"
		>
			<path
				d="M21.875 2.5H18.125V0.625C18.125 0.45924 18.0592 0.300269 17.9419 0.183058C17.8247 0.0658481 17.6658 0 17.5 0C17.3342 0 17.1753 0.0658481 17.0581 0.183058C16.9408 0.300269 16.875 0.45924 16.875 0.625V2.5H8.125V0.625C8.125 0.45924 8.05915 0.300269 7.94194 0.183058C7.82473 0.0658481 7.66576 0 7.5 0C7.33424 0 7.17527 0.0658481 7.05806 0.183058C6.94085 0.300269 6.875 0.45924 6.875 0.625V2.5H3.125C2.2965 2.50099 1.50222 2.83055 0.916387 3.41639C0.330551 4.00222 0.000992411 4.7965 0 5.625V21.875C0.000992411 22.7035 0.330551 23.4978 0.916387 24.0836C1.50222 24.6694 2.2965 24.999 3.125 25H21.875C22.7036 24.9993 23.4981 24.6699 24.084 24.084C24.6699 23.4981 24.9993 22.7036 25 21.875V5.625C24.9993 4.7964 24.6699 4.00193 24.084 3.41602C23.4981 2.83011 22.7036 2.50066 21.875 2.5ZM23.75 21.875C23.75 22.3723 23.5525 22.8492 23.2008 23.2008C22.8492 23.5525 22.3723 23.75 21.875 23.75H3.125C2.62772 23.75 2.15081 23.5525 1.79917 23.2008C1.44754 22.8492 1.25 22.3723 1.25 21.875V11.25H23.75V21.875ZM23.75 10H1.25V5.625C1.25 4.59 2.0875 3.75 3.125 3.75H6.875V5.625C6.875 5.79076 6.94085 5.94973 7.05806 6.06694C7.17527 6.18415 7.33424 6.25 7.5 6.25C7.66576 6.25 7.82473 6.18415 7.94194 6.06694C8.05915 5.94973 8.125 5.79076 8.125 5.625V3.75H16.875V5.625C16.875 5.79076 16.9408 5.94973 17.0581 6.06694C17.1753 6.18415 17.3342 6.25 17.5 6.25C17.6658 6.25 17.8247 6.18415 17.9419 6.06694C18.0592 5.94973 18.125 5.79076 18.125 5.625V3.75H21.875C22.3723 3.75 22.8492 3.94754 23.2008 4.29917C23.5525 4.65081 23.75 5.12772 23.75 5.625V10Z"
				fill="black"
			/>
		</svg>
	);
};

export const ParticipantsIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 27 27"
			fill="none"
		>
			<path
				d="M23.5473 23.9065C23.5473 18.3563 19.0485 13.8574 13.4983 13.8574C7.94809 13.8574 3.44922 18.3563 3.44922 23.9065H23.5473Z"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.733 13.8645C16.7073 13.8645 19.1184 11.4534 19.1184 8.47913C19.1184 5.50486 16.7073 3.09375 13.733 3.09375C10.7588 3.09375 8.34766 5.50486 8.34766 8.47913C8.34766 11.4534 10.7588 13.8645 13.733 13.8645Z"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DuesIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 36 36"
			fill="none"
		>
			<path
				d="M6.05514 15.5447C6.55938 13.903 7.50568 12.4318 8.79039 11.2922C8.09139 10.7334 8.79039 7.26018 8.79039 7.26018C8.79039 7.26018 11.5849 8.49768 12.0844 9.07668C12.0844 9.07668 14.2399 6.46143 20.4889 6.46143C26.7379 6.46143 32.6261 11.2929 32.6261 17.7407C32.6261 24.1884 27.9544 26.2449 27.9544 26.2449C27.711 27.3826 27.336 28.488 26.8369 29.5389H24.3611C23.9662 28.9313 23.6129 28.2976 23.3036 27.6422C23.3036 27.6422 21.3274 27.8822 19.9099 27.8822C18.911 27.8618 17.9158 27.7549 16.9354 27.5627C16.8508 28.2649 16.6121 28.9397 16.2364 29.5389H13.5416C12.7031 28.8204 12.2839 26.5644 12.2839 26.5644C12.2839 26.5644 5.49639 23.4902 4.05864 21.6527C3.27939 20.1954 3.37914 16.9614 3.37914 16.9614C4.13389 16.2663 5.05542 15.7781 6.05439 15.5439L6.05514 15.5447Z"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.6562 10.334C16.2557 9.18405 18.1993 8.61368 20.1665 8.71701C22.3158 8.68164 24.4182 9.34749 26.1552 10.6138"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.71094 16.5264C9.0216 16.5264 9.27344 16.2745 9.27344 15.9639C9.27344 15.6532 9.0216 15.4014 8.71094 15.4014C8.40028 15.4014 8.14844 15.6532 8.14844 15.9639C8.14844 16.2745 8.40028 16.5264 8.71094 16.5264Z"
				fill="black"
			/>
		</svg>
	);
};