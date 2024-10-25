const {NumberField} = foundry.data.fields;

/**
 * Field for storing movement data.
 */
export default class MovementField extends foundry.data.fields.SchemaField {
    constructor(fields = {}, options = {}) {
        const numberConfig = {required: true, nullable: true, min: 0, step: 0.1, initial: null};
        fields = {
            max: new NumberField({...numberConfig, label: "NOZRI.Actor.Movement."}),
        };
        Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
        super(fields, {label: "DND5E.Movement", ...options});
    }
}