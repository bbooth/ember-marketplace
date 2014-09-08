import Ember from "ember";

export default Ember.Component.extend({
    carouselIndex: 0,
    itemCount: 3,
    divId: function () {
        return 'carousel-' + this.get('title').toLowerCase();
    }.property('title'),
    href: function () {
        return '#' + this.get('divId');
    }.property('divId'),
    getCarousel: function () {
        var carousel = this.get('_carousel');
        var $carousel = this.$('.carousel');
        if (!carousel && $carousel) {
            $carousel.carousel({
                interval: false,
                wrap: false
            });
            carousel = $carousel.data('bs.carousel');
            this.set('_carousel', carousel);
        }
        return carousel;
    },
    didInsertElement: function () {
        this.set('carouselIndex', 0);
        this.set('itemCount', this.get('listings').get('length'));
        this.$('.carousel > .carousel-inner > .item').first().addClass('active');
        this.$('.carousel .indicators .indicator-item').first().toggleClass('fa-circle-thin fa-circle');
    },
    onCarouselIndexChanged: function () {
        var index = this.get('carouselIndex');

        var carousel = this.getCarousel();
        if (carousel) {
            carousel.to(index);
        }

        this.$('.carousel .indicators .indicator-item.fa-circle').toggleClass('fa-circle fa-circle-thin');
        this.$('.carousel .indicators .indicator-item').eq(index).toggleClass('fa-circle-thin fa-circle');
    }.observes('carouselIndex'),
    actions: {
        next: function () {
            var index = this.get('carouselIndex');
            var nextIndex = index + 1;
            var count = this.get('itemCount');

            if (nextIndex >= count) {
                nextIndex = 0;
            }

            this.set('carouselIndex', nextIndex);
        },
        previous: function () {
            var index = this.get('carouselIndex');
            var nextIndex = index -1;
            var count = this.get('itemCount');

            if (nextIndex < 0) {
                nextIndex = count - 1;
            }

            this.set('carouselIndex', nextIndex);
        },
        navigate: function(index) {
            this.set('carouselIndex', index);
        }
    }
});