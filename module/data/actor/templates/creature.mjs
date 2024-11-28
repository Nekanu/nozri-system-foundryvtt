const {HTMLField, NumberField, SchemaField} = foundry.data.fields;

/**
 * @typedef {object} Health
 * @property {number} max
 * @property {number} current
 * @property {number} temp
 * @property {number} temp_max
 */

/**
 * Extend the basic ActorSheet with some very simple modifications
 *
 * @property {object} health
 * @property {number} health.max
 * @property {number} health.value
 * @property {number} health.temp
 * @property {number} health.temp_max
 *
 * @property {object} abilities
 *
 * @property {object} abilities.fight
 * @property {number} abilities.fight.health
 * @property {number} abilities.fight.
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
            value: new NumberField({
                required: true,
                nullable: true,
                integer: false,
                min: 0,
                initial: 4,
            }),
            max: new NumberField({
                required: true,
                nullable: true,
                integer: false,
                min: 0,
                initial: 4
            })
        });

        schema.actions = new SchemaField({
            points_max: new NumberField({
                ...requiredInteger,
                initial: 2,
                min: 0,
            }),
            points_current: new NumberField({...requiredInteger, initial: 0, min: 0}),
        });

        schema.biography = new HTMLField();

        schema.gold = new NumberField({...requiredInteger, initial: 0, min: 0, label: "NOZRI.Gold"});

        // Iterate over ability names and create a new SchemaField for each.
        schema.abilities = new SchemaField({
            fight: new SchemaField({
                health: new NumberField({...requiredInteger, initial: 12, min: 0, label: "NOZRI.Health"}),
                physical_attack: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Fight.PhysicalAttack"
                }),
                magical_attack: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Fight.MagicalAttack"
                }),
                initiative: new NumberField({...requiredInteger, initial: 0, min: 0, label: "NOZRI.Initiative"}),
                block: new NumberField({...requiredInteger, initial: 0, min: 0, label: "NOZRI.Block"}),
                resistances: new SchemaField({
                    nozna: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Nozna"
                    }),
                    mezna: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Mezna"
                    }),
                    fire: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Fire"
                    }),
                    water: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Water"
                    }),
                    frost: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Frost"
                    }),
                    air: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Air"
                    }),
                    earth: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Earth"
                    }),
                    poison: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Poison"
                    }),
                    electricity: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Electricity"
                    }),
                    light: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Light"
                    }),
                    shadow: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Shadow"
                    }),
                    bleed: new NumberField({
                        ...requiredInteger,
                        initial: 0,
                        min: 0,
                        label: "NOZRI.Ability.Resistance.Bleed"
                    })
                })
            }),
            environmental: new SchemaField({
                strength: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Environmental.Strength"
                }),
                dexterity: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Environmental.Dexterity"
                }),
                intelligence: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Environmental.Intelligence"
                }),
                faith: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Environmental.Faith"
                }),
                perception: new NumberField({
                    ...requiredInteger,
                    initial: 0,
                    min: 0,
                    label: "NOZRI.Ability.Environmental.Perception"
                }),
                investigation: new NumberField({}),
                knowledge: new NumberField({}),
                willpower: new NumberField({}),
                stealth: new NumberField({}),
                reaction: new NumberField({}),
            }),
            dialogue: new SchemaField({
                persuasion: new NumberField({}),
                intimidation: new NumberField({}),
                acting: new NumberField({}),
                deception: new NumberField({}),
                charisma: new NumberField({}),
                empathy: new NumberField({}),
            }),
        });

        return schema;
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        this.health.value = Math.clamp(this.health.value, 0, this.health.max);


    }
}