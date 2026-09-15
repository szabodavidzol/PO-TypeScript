import { EventType } from "./EventType";
import { Participant } from "./Participant";

export interface Event {
    id: number;
    name: string;
    location: string;
    date: Date;
    type: EventType;
    participants: Participant[];

    addParticipant(participant: Participant): void;
    removeParticipant(participantId: number): void;
}

export class EventImpl implements Event {
    public participants: Participant[] = [];

    constructor(
        public id: number,
        public name: string,
        public location: string,
        public date: Date,
        public type: EventType        
    ) {}

    addParticipant(participant: Participant): void {
    this.participants.push(participant);
    }
    removeParticipant(participantId: number): void {
        this.participants = this.participants.filter(p => p.id !== participantId);
    }

}

