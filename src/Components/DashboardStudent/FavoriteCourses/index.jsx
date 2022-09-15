import React from 'react';
import { BackGroundDashboard } from '../../Background';

import { Menus } from '../../Menus';

import {Container} from "./styled"

export const FavoriteCourses = () => {
    return (
        <Container>
            <Menus></Menus>
            <BackGroundDashboard/>
        </Container>
    )
}