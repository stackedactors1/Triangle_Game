function touchHandler(event) {
    var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function initTouches() {
    $(".triangle").bind("touchstart", touchHandler, true);
    $(".triangle").bind("touchmove", touchHandler, true);
    $(".triangle").bind("touchend", touchHandler, true);
    $(".triangle").bind("touchcancel", touchHandler, true);
}
