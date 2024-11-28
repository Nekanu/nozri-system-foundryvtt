export const NOZRI = {};

NOZRI.abilities = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
NOZRI.abilities.fight = {
    health: 'NOZRI.Ability.Fight.Health',
    physical_attack: 'NOZRI.Ability.Fight.PhysicalAttack',
    magical_attack: 'NOZRI.Ability.Fight.MagicalAttack',
    initiative: 'NOZRI.Ability.Fight.Initiative',
    block: 'NOZRI.Ability.Fight.Block',
    resistance: 'NOZRI.Ability.Fight.Resistance',
};

NOZRI.abilities.resistances = {
    nozna: 'NOZRI.Ability.Resistance.Nozna',
    mezna: 'NOZRI.Ability.Resistance.Mezna',
    fire: 'NOZRI.Ability.Resistance.Fire',
    water: 'NOZRI.Ability.Resistance.Water',
    frost: 'NOZRI.Ability.Resistance.Frost',
    earth: 'NOZRI.Ability.Resistance.Earth',
    air: 'NOZRI.Ability.Resistance.Air',
    light: 'NOZRI.Ability.Resistance.Light',
    electricity: 'NOZRI.Ability.Resistance.Electricity',
    poison: 'NOZRI.Ability.Resistance.Poison',
    bleed: 'NOZRI.Ability.Resistance.Bleed'
};

NOZRI.abilities.dialogue = {
    persuasion: 'NOZRI.Ability.Dialogue.Persuasion',
    intimidation: 'NOZRI.Ability.Dialogue.Intimidation',
    performance: 'NOZRI.Ability.Dialogue.Performance',
    deception: 'NOZRI.Ability.Dialogue.Deception',
    charisma: 'NOZRI.Ability.Dialogue.Charisma'
};

NOZRI.abilities.environmental = {
    strength: 'NOZRI.Ability.Environmental.Strength',
    intelligence: 'NOZRI.Ability.Environmental.Intelligence',
    dexterity: 'NOZRI.Ability.Environmental.Dexterity',
    faith: 'NOZRI.Ability.Environmental.Faith',
    perception: 'NOZRI.Ability.Environmental.Perception',
    investigation: 'NOZRI.Ability.Environmental.Investigation',
    carefulness: 'NOZRI.Ability.Environmental.Carefulness',
    stealth: 'NOZRI.Ability.Environmental.Stealth',
    reaction: 'NOZRI.Ability.Environmental.Reaction',
    willpower: 'NOZRI.Ability.Environmental.Willpower'
};
