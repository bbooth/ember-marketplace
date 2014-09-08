import DS from "ember-data";

export default DS.Model.extend({
    title: DS.attr('string'),
    shortDescription: DS.attr('string'),
    cost: DS.attr('number'),
    averageRating: DS.attr('number')
});