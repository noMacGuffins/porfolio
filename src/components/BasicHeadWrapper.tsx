/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Helmet from "react-helmet";

const BasicHeadWrapper = ({ children, title = null }) => {
	return (
		<>
			<Head>
				<title>{title || "세한의 개발 포트폴리오"}</title>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<body>{children}</body>
		</>
	);
};

export default BasicHeadWrapper;
