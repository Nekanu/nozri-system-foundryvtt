import NozriItemBase from './templates/base.mjs';

export default class NozriSpell extends NozriItemBase {
    static LOCALIZATION_PREFIXES = [
        'NOZRI.Item.base',
        'NOZRI.Item.Spell',
    ];

    static defineSchema() {
        const fields = foundry.data.fields;
        const schema = super.defineSchema();

        schema.spellLevel = new fields.NumberField({
            required: true,
            nullable: false,
            integer: true,
            initial: 1,
            min: 1,
            max: 9,
        });

        return schema;
    }
}
