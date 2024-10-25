import NozriCharacter from "./character.mjs";
import NozriNPC from "./npc.mjs";
import NozriActorCreature from "./templates/creature.mjs";

export {
    NozriActorCreature,
    NozriCharacter,
    NozriNPC,
};

export const config = {
    character: NozriCharacter,
    npc: NozriNPC,
};