const {HTMLField, NumberField, SchemaField} = foundry.data.fields;

/**
 * @typedef {object} AbilityData
 * @property {string} name      Ability name
 * @property {number} value     Ability score
 * @property {number} max       Maximum ability score
 * @property {number} bonus     Ability score bonus
 */

/**
 * @typedef {object} Health
 * @property {number} max
 * @property {number} current
 * @property {number} temp
 * @property {number} temp_max
 */

/**
 * Extend the basic ActorSheet with some very simple modifications
 */
export default class NozriActorCreature extends foundry.abstract.TypeDataModel {
    static LOCALIZATION_PREFIXES = ["NOZRI.Actor.base"];

    static defineSchema() {
        const requiredInteger = {required: true, nullable: false, integer: true};
        const schema = {};

        schema.health = new SchemaField({
            current: new NumberField({...requiredInteger, initial: 12, min: 0}),
            max: new NumberField({...requiredInteger, initial: 12}),
            temp: new NumberField({...requiredInteger, initial: 0, min: 0}),
            temp_max: new NumberField({...requiredInteger, initial: 0, gmOnly: true})
        });

        schema.movement = new SchemaField({
            movement_used: new NumberField({
                required: true,
                nullable: true,
                integer: false,
                min: 0,
                max: 0,
                initial: 0
            }),
        });

        schema.biography = new HTMLField();

        // Iterate over ability names and create a new SchemaField for each.
        schema.abilities = new SchemaField(
            Object.keys(CONFIG.NOZRI.abilities).reduce((obj, category) => {
                obj[ability] = new SchemaField({
                    value: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                    }),
                });
                return obj;
            }, {})
        );

        return schema;
    }
}