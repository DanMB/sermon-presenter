import Context from '../Context';

export const isOpen = new Context(false);
export const current = new Context<string | null>(null);
export const currentTab = new Context<string | null>(null);
