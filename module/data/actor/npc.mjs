import NozriActorCreature from "./templates/creature.mjs";

const {NumberField} = foundry.data.fields;

export default class NozriNPC extends NozriActorCreature {
    static LOCALIZATION_PREFIXES = [
        ...super.LOCALIZATION_PREFIXES,
        'NOZRI.Actor.NPC',
    ];

    static defineSchema() {
        const requiredInteger = {required: true, nullable: false, integer: true};
        const schema = super.defineSchema();

        schema.cr = new NumberField({...requiredInteger, initial: 1, min: 0});

        return schema;
    }

    prepareDerivedData() {
        this.xp = this.cr * this.cr * 100;
    }
}
