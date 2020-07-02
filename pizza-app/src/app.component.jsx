import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Logo} from './header/logo/logo.component';
import { StyledAppContainer} from './app.styles';
import {StyledHeader} from "./header/header.style";
import {Header} from "./header/header.component";
import {Footer} from "./footer/footer.component";
import {Delivery} from "./delivery/delivery.component";
import {MenuBar} from "./menuBar/menuBar.component";
import {DescribeFrontImage} from "./describeFrontImage/describeFrontImage.component";

export const App = () => {
	return (
		<Router>
			<StyledAppContainer>
				<Header />
				<DescribeFrontImage />
				<MenuBar />
				<Delivery />
				<Footer />
			</StyledAppContainer>
		</Router>
	);
};

export default memo(App);
