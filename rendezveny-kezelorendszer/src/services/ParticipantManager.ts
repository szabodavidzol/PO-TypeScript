import { Participant, ParticipantImpl } from "../model/Participant";

export class ParticipantManager {
    private participants: Participant[] = [];
    private nextId: number = 1;

    createParticipant(name: string, email: string): Participant {
        const participant = new ParticipantImpl(this.nextId++, name, email);
        this.participants.push(participant);
        return participant;
    }

    deleteParticipant(id: number): boolean {
        const lengthBefore = this.participants.length;
        this.participants = this.participants.filter(p => p.id !== id);
        return this.participants.length < lengthBefore;
    }

    getParticipantById(id: number): Participant | undefined {
        return this.participants.find(p => p.id === id);
    }

    getAllParticipants(): Participant[] {
        return this.participants;
    }
}