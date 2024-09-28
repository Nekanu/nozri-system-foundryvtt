import NozriFeature from "./feature.mjs";
import NozriGear from "./gear.mjs";
import NozriSpell from "./spell.mjs";

export {
    NozriFeature,
    NozriGear,
    NozriSpell
};

// Export abstracts / templates
export {default as NozriItemBase} from "./templates/base.mjs";

export const config = {
    feature: NozriFeature,
    gear: NozriGear,
    spell: NozriSpell,
}