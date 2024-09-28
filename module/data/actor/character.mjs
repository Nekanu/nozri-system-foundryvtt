import {NozriActorCreature} from "../_module.mjs";

const {SchemaField, NumberField} = foundry.data.fields;

export default class NozriCharacter extends NozriActorCreature {
    static LOCALIZATION_PREFIXES = [
        ...super.LOCALIZATION_PREFIXES,
        'NOZRI.Actor.Character',
    ];

    static defineSchema() {
        const requiredInteger = {required: true, nullable: false, integer: true};
        const schema = super.defineSchema();

        schema.attributes = new SchemaField({
            level: new SchemaField({
                value: new NumberField({...requiredInteger, initial: 1}),
            }),
        });

        return schema;
    }

    prepareDerivedData() {
        // Loop through ability scores, and add their modifiers to our sheet output.
        for (const key in this.abilities) {
            // Calculate the modifier using d20 rules.
            this.abilities[key].mod = this.abilities[key].value;
            // Handle ability label localization.
            this.abilities[key].label =
                game.i18n.localize(CONFIG.NOZRI.abilities[key]) ?? key;
        }
    }

    getRollData() {
        const data = {};

        // Copy the ability scores to the top level, so that rolls can use
        // formulas like `@str.mod + 4`.
        if (this.abilities) {
            for (let [k, v] of Object.entries(this.abilities)) {
                data[k] = foundry.utils.deepClone(v);
            }
        }

        data.lvl = this.attributes.level.value;

        return data;
    }
}
