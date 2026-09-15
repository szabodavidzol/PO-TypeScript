export interface Participant {
    id: number;
    name: string;
    email: string;
}

export class ParticipantImpl implements Participant {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}