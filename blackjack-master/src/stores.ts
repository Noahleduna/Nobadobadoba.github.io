import { writable } from "svelte/store";

export const images = writable(new Map<string, string>());