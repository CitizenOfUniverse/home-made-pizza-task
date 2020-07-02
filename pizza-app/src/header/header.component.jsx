import React from "react";
import {StyledHeader,StyledLogoCompany} from "./header.style";
import {CompanyName} from "./companyName/companyName.component";
import {MenuAndScheduleHeader} from "./menuAndScheduleHeader/menuAndScheduleHeader.component";
import {BasketIcon} from "./basketIcon/basketIcon.component";
import {Logo} from "./logo/logo.component";

export const Header = () => <StyledHeader>
	<StyledLogoCompany>
		<Logo />
		<CompanyName />
	</StyledLogoCompany>
	<MenuAndScheduleHeader />
	<BasketIcon />
</StyledHeader>;