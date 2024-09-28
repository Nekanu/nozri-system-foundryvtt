import NozriCharacter from "./character.mjs";
import NozriNPC from "./npc.mjs";

export {
    NozriCharacter,
    NozriNPC,
};

// Export abstracts
export {default as NozriActorCreature} from "./templates/creature.mjs";

export const config = {
    character: NozriCharacter,
    npc: NozriNPC,
};