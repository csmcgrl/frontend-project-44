#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { rules, generateRound } from '../src/games/brain-gcd-funcs.js';

runEngine(rules, generateRound);
