import { defaults } from "./defaults/init.js"

export const state = {
    ...defaults,
    milisenconds: 1000,
    computer_time_thinking: 1000,
    interval: null,
    mode: null,
    is_started: false,
    is_finished: false,
    winner: null,
    size: 0,
    timer: 0,
    turn: 'a',
    settings: null
}