import { Event, EventImpl } from "../model/Event";
import { EventType } from "../model/EventType";
import { Participant } from "../model/Participant";

export class EventManager {
    private events: Event[] = [];
    private nextId: number = 1;

    createEvent(
        name: string,
        location: string, 
        date: Date, 
        type: EventType):
         Event {
        const event = new EventImpl(this.nextId++, name, location, date, type);
        this.events.push(event);
        return event;
    }

    editEvent(
        id: number,
        data: Partial<{
            name: string;
            location: string;
            date: Date;
            type: EventType;
        }>
    ): Event | null {
        const event = this.getEventById(id);
        if (!event) return null;
        
        if (data.name) event.name = data.name;
        if (data.location) event.location = data.location;
        if (data.date) event.date = data.date;
        if (data.type) event.type = data.type;
        
        return event;
    }

    deleteEvent(id: number): boolean {
        const lengthBefore = this.events.length;
        this.events = this.events.filter(e => e.id !== id);
        return this.events.length < lengthBefore;
    }

    getEventById(id: number): Event | undefined {
        return this.events.find(e => e.id === id);
    }

    getEventsByType(type: EventType): Event[] {
        return this.events.filter(e => e.type === type);
    }
    getAllEvents(): Event[] {
        return this.events;
    }

    addParticipantToEvent(eventId: number, participant: Participant): boolean {
        const event = this.getEventById(eventId);
        if (!event) return false;
        event.addParticipant(participant);
        return true;
    }
    removeParticipantFromEvent(eventId: number, participantId: number): boolean {
        const event = this.getEventById(eventId);
        if (!event) return false;
        event.removeParticipant(participantId);
        return true;
    }
}