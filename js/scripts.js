$(document).ready(function() {
    var e = $("#hamburger"),
        t = $("#dropdown");
    e.click(function() {
        t.slideToggle("fast")
    }), t.find("a").on("click", function() {
        $(t).slideToggle()
    }), hero = $("#row-hero"), header = $("#header"), clients = $("#clients"), projects = $("#projects"), projectsOffset = projects.offset(), clientsOffset = clients.offset(), contactOffset = $("#contact-footer").offset(), heightDifference = $(window).height() - (hero.outerHeight() + header.outerHeight() + clients.outerHeight()), $(window).scroll(function() {
        $(this).scrollTop() > projectsOffset.top ? (header.find(".active").removeClass("active"), header.find("[data-nav='projects']").addClass("active"), header.hasClass("default") && header.hide().removeClass("default").addClass("nav-fixed").fadeIn()) : (header.removeClass("nav-fixed").addClass("default"), header.find(".active").removeClass("active"), header.find("[data-nav='home']").addClass("active")), (header.find(".active").removeClass("active"), header.find("[data-nav='contact-footer']").addClass("active"))
    }), $("a").click(function() {
        $("html, body").stop().animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 750);
        var e = $(this).attr("href");
        return e.indexOf("#contact-footer") >= 0 && $("#field1").focus(), !1
    })
})