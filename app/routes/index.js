import Ember from "ember";

var IndexRoute = Ember.Route.extend({
    model: function () {
        return {
            featured: [this.store.find('listing', 1), this.store.find('listing', 2), this.store.find('listing', 3)],
            popular: [this.store.find('listing', 1), this.store.find('listing', 2), this.store.find('listing', 3)],
            newest: [this.store.find('listing', 1), this.store.find('listing', 2), this.store.find('listing', 3)]
        };
    }
});

export default IndexRoute;