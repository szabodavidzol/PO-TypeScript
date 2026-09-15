import { EventManager } from "./services/Eventmanager";
import { ParticipantManager } from "./services/ParticipantManager";
import { EventType } from "./model/EventType";

const eventManager = new EventManager();
const participantManager = new ParticipantManager();

const sziget = eventManager.createEvent(
    "Sziget Festival",
    "Budapest",
    new Date("2026-08-11"),
    EventType.FESTIVAL
);

const candlelightConcert = eventManager.createEvent(
    "Candlelight Concert",
    "Budapest",
    new Date("2026-10-10"),
    EventType.CONCERT
);

const rockConcert = eventManager.createEvent(
    "Rock Concert",
    "Budapest",
    new Date("2026-11-20"),
    EventType.CONCERT
);

const user = participantManager.createParticipant(
    "Teszt elek",
    "teszt@elek.com"
);
const user2 = participantManager.createParticipant(
    "Kiss Béla",
    "kiss@bela.com"
);
const user3 = participantManager.createParticipant(
    "Nagy Anna",
    "nagy@anna.com"
);

eventManager.addParticipantToEvent(sziget.id, user);
eventManager.addParticipantToEvent(sziget.id, user2);
eventManager.addParticipantToEvent(candlelightConcert.id, user3);
eventManager.addParticipantToEvent(rockConcert.id, user3);

console.log("Fesztivál résztvevők:", sziget.participants);
console.log("Koncertek:", eventManager.getEventsByType(EventType.CONCERT));

eventManager.removeParticipantFromEvent(sziget.id, 1);
console.log("Fesztivál résztvevők a törlés után:", sziget.participants);

