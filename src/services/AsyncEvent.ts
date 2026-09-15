import { EventManager } from "./Eventmanager";
import { EventType } from "../model/EventType";

export class AsyncEvent {
    constructor(private eventManager: EventManager) {}

    async createEvent(
        name: string,
        location: string,
        date: Date,
        type: EventType
    ) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            const event = this.eventManager.createEvent(name, location, date, type);
            return event;
        } catch (error) {
            console.error("Hiba rendezvény létrehozásakor:", error);
            return null;
        }
    }
}