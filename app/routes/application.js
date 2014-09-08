import Ember from "ember";

export default Ember.Route.extend({
    model: function () {
        this.store.push('listing', {
            id: 1,
            title: 'Listing 1',
            shortDescription: 'Short description 1',
            cost: null,
            averageRating: 3.75
        });

        this.store.push('listing', {
            id: 2,
            title: 'Listing 2',
            shortDescription: 'Short description 2',
            cost: null,
            averageRating: 4.5
        });

        this.store.push('listing', {
            id: 3,
            title: 'Listing 3',
            shortDescription: 'Short description 3',
            cost: 19.95,
            averageRating: 3.2
        });
    }
});