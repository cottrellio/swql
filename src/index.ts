import 'reflect-metadata';

import { Container } from 'typescript-ioc';

import SWQL from './SWQL';

const app: SWQL = Container.get(SWQL);
app.start();
