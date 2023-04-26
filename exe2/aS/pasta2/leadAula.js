import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class LeadAula extends LightningElement {
    @api ide;
    @api firstname;
    @api lastname;
    @api age;
    @api email;
    @api classification;
    @api company;
    @api annualrevenue;
}